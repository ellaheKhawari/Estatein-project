import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {AuthState, AuthUser} from "../types/types.ts";
import {toast} from "sonner";


// Change this to your real API base (or read from .env as VITE_API_BASE_URL)
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api';

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            token: null,
            user: null,
            isLoading: false,
            error: null,

            // 1) Sends credentials, gets a token back, then immediately loads /me
            login: async (email, password) => {
                set({ isLoading: true, error: null });
                try {
                    const res = await fetch(`${API_BASE}/auth/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email, password }),
                    });

                    if (!res.ok) {
                        toast.error('Invalid email or password');
                    }

                    const data = await res.json();
                    set({ token: data.token });
                    await get().fetchMe();
                } catch (err) {
                    set({ error: err instanceof Error ? err.message : 'Something went wrong' });
                    throw err;
                } finally {
                    set({ isLoading: false });
                }
            },

            // 2) Uses the token to fetch the logged-in user's profile
            fetchMe: async () => {
                const token = get().token;
                if (!token) return;

                const res = await fetch(`${API_BASE}/me`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!res.ok) {
                    get().logout();
                    toast.error('Your session has expired');
                }

                const user: AuthUser = await res.json();
                set({ user });
            },

            logout: () => {
                set({ token: null, user: null });
            },
        }),
        {
            name: 'nova-auth', // localStorage key
            partialize: (state) => ({ token: state.token }), // only persist the token, not the user object
        }
    )
);
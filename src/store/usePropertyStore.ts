import { create } from "zustand";
import type { PropertyProps } from "../types/types";
import { fetchProperties } from "../data/fetchProperties";

interface PropertyStore {
    properties: PropertyProps[];
    loading: boolean;
    error: string | null;
    fetched: boolean;
    loadProperties: () => Promise<void>;
    getPropertyById: (id: string | number) => PropertyProps | undefined;
}

export const usePropertyStore = create<PropertyStore>((set, get) => ({
    properties: [],
    loading: true,
    error: null,
    fetched: false,

    loadProperties: async () => {
        if (get().fetched) return;
        set({ loading: true, error: null });
        try {
            const data = await fetchProperties();
            set({ properties: data, loading: false, fetched: true });
        } catch (err) {
            set({ error: (err as Error).message, loading: false });
        }
    },

    getPropertyById: (id) => {
        return get().properties.find((p) => String(p.id) === String(id));
    },
}));
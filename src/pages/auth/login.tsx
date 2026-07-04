import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, Building2 } from 'lucide-react';
import { toast } from 'sonner';
import {useAuthStore} from "../../store/authStore.tsx";

export default function Login() {
    const navigate = useNavigate();
    const login = useAuthStore((s) => s.login);
    const isLoading = useAuthStore((s) => s.isLoading);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success('Welcome');
            navigate('/dashboard');
        } catch {
            toast.error('Login failed. Check the information.');
        }
    };

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary/5 px-6 py-12">
            {/* Blueprint grid backdrop */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage:
                        'linear-gradient(#946cf9 1px, transparent 1px), linear-gradient(90deg, #946cf9 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
            />
            <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-bg blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-bg blur-3xl" />

            <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-border bg-[#16181D]/80 shadow-2xl backdrop-blur md:grid-cols-2">
                {/* Left: architectural illustration panel */}
                <div className="relative hidden flex-col justify-between bg-bg p-10 md:flex">
                    <div className="flex items-center gap-2 ">
                        <Building2 className="h-6 w-6 text-primary!" strokeWidth={1.5} />
                        <span className="font-medium text-lg tracking-wide">Nova Estates</span>
                    </div>

                    <BlueprintBuilding />

                    <div>
                        <p className="font-medium text-2xl leading-snug ">
                            Every property, a blueprint.
                            <br />
                            Every sign in, a new beginning.
                        </p>
                        <p className="mt-3 text-sm text-text-myGray!">Access your property dashboard and keep track of your listings.</p>
                    </div>
                </div>

                {/* Right: form */}
                <div className="flex flex-col justify-center p-8 sm:p-12 bg-bg">
                    <div className="mb-8 flex items-center gap-2 md:hidden">
                        <Building2 className="h-6 w-6 text-primary!" strokeWidth={1.5} />
                        <span className="font-medium text-lg ">Nova Estates</span>
                    </div>

                    <h1 className="font-medium text-3xl ">Sign in to your account</h1>
                    <p className="mt-2 text-sm text-text-myGray!">Enter your details to access the dashboard.</p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-xs md:text-sm font-medium uppercase tracking-wider text-text-myGray!"
                            >
                               Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-border bg-bg px-4 py-3  placeholder:text-text-myGray! outline-none transition focus:boring-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <div className="mb-1.5 flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium uppercase tracking-wider text-text-myGray!"
                                >
                                    password
                                </label>
                                <Link to="/forgot-password" className="text-xs md:text-sm text-text-myGray! hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full rounded-xl border border-border bg-bg px-4 py-3 pr-11  placeholder:text-text-myGray! outline-none transition focus:boring-primary focus:ring-1 focus:ring-primary"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-myGray! "
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 font-medium text-[#0B0C0F] transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                            {!isLoading && (
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                            )}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm md:text-base text-text-myGray!">
                        {'Don\'t have an account? '}
                        <Link to="/signup" className="font-medium underline">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

// Signature element: a blueprint of a building that "draws itself" on load
function BlueprintBuilding() {
    return (
        <svg viewBox="0 0 240 200" className="h-40 w-full" fill="none">
            <g stroke="#946cf9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9">
                <path
                    d="M40 180V70l50-30 50 30v110"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    style={{ animation: 'draw 1.8s ease forwards' }}
                />
                <path
                    d="M90 40l60 34v106"
                    strokeDasharray="220"
                    strokeDashoffset="220"
                    style={{ animation: 'draw 1.8s ease 0.3s forwards' }}
                />
                <line
                    x1="40"
                    y1="180"
                    x2="200"
                    y2="180"
                    strokeDasharray="160"
                    strokeDashoffset="160"
                    style={{ animation: 'draw 1s ease 1s forwards' }}
                />
                {[0, 1, 2, 3].map((i) => (
                    <rect
                        key={i}
                        x={55 + i * 20}
                        y={100 + (i % 2) * 15}
                        width="10"
                        height="14"
                        opacity="0"
                        style={{ animation: `fadeInWindow 0.5s ease ${1.4 + i * 0.15}s forwards` }}
                    />
                ))}
            </g>
            <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes fadeInWindow { to { opacity: 0.7; } }
      `}</style>
        </svg>
    );
}

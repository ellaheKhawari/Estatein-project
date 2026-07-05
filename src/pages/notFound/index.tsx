import { Link } from 'react-router-dom';
import {Home, SearchX} from 'lucide-react';

const NotFound = () => {
    return (

            <div
                className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-primary/5 px-6 text-center">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage:
                            'linear-gradient(#703bf7 1px, transparent 1px), linear-gradient(90deg, #946cf9 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bg2/50  blur-3xl"/>

                <div className="relative z-10 flex flex-col items-center">
                    <svg viewBox="0 0 200 140" className="h-36 w-56">
                        <rect
                            x="10"
                            y="10"
                            width="180"
                            height="120"
                            fill="none"
                            stroke=""
                            strokeWidth="1.5"
                            strokeDasharray="6 6"
                            rx="4"
                        />
                        <g transform="translate(100 70)">
                            <path
                                d="M0 -22c10 0 18 8 18 18 0 13-18 30-18 30s-18-17-18-30c0-10 8-18 18-18z"
                                fill="#18171b"
                                stroke="#703bf7"
                                strokeWidth="2"
                            />
                            <circle cx="0" cy="-4" r="6" fill="#703bf7"/>
                        </g>
                    </svg>

                    <h1 className="mt-2 font-serif text-7xl ">404</h1>
                    <h2 className="mt-4 text-xl font-medium ">This address is not on our map.</h2>
                    <p className="mt-2 max-w-md text-sm text-text-myGray!">The link may be broken or the property may have been removed from the list. Go back and search again.</p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            to="/"
                            className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-[#0B0C0F] transition "
                        >
                            <Home className="h-4 w-4"/>
                            Back to Home
                        </Link>
                        <Link
                            to="/properties"
                            className="flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-medium  transition hover:border-primary hover:text-primary"
                        >
                            <SearchX className="h-4 w-4"/>
                            Property search
                        </Link>
                    </div>
                </div>
            </div>
    );
}
export default NotFound;
/**
 * Usage in App.tsx:
 *
 *   <Suspense fallback={<Loading />}>
 *     ...routes...
 *   </Suspense>
 */
export default function Loading() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0D0B14]">
            {/* Ambient glow, same as the auth page */}
            <div
                className="pointer-events-none absolute -top-40 -right-32 h-[26rem] w-[26rem] rounded-full bg-[#703BF7]/20 blur-[100px] animate-glow-pulse"/>
            <div
                className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-[#946CF9]/15 blur-[100px] animate-glow-pulse"
                style={{animationDelay: '1.2s'}}
            />

            <div className="relative z-10 flex flex-col items-center gap-3">
                {/* A villa that draws itself with a single continuous line, on a loop */}
                <svg viewBox="0 0 200 160" className="h-36 w-44">
                    <defs>
                        <linearGradient id="villaGradient" x1="0" y1="0" x2="200" y2="160">
                            <stop offset="0%" stopColor="#946CF9"/>
                            <stop offset="100%" stopColor="#703BF7"/>
                        </linearGradient>
                    </defs>
                    <g
                        stroke="url(#villaGradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        className="animate-villa-fade"
                    >
                        {/* ground line */}
                        <path d="M20,140 L180,140" strokeDasharray="160" className="animate-draw-ground"/>
                        {/* flat-roof side wing */}
                        <path d="M25,140 L25,120 L60,120" strokeDasharray="55" className="animate-draw-wing"/>
                        {/* main pitched-roof house */}
                        <path
                            d="M60,140 L60,90 L100,55 L140,90 L140,140"
                            strokeDasharray="207"
                            className="animate-draw-house"
                        />
                        {/* door */}
                        <path d="M90,140 L90,112 L110,112 L110,140" strokeDasharray="76" className="animate-draw-door"/>
                        {/* windows */}
                        <path d="M68,105 L82,105 L82,119 L68,119 Z" strokeDasharray="56"
                              className="animate-draw-window1"/>
                        <path d="M118,105 L132,105 L132,119 L118,119 Z" strokeDasharray="56"
                              className="animate-draw-window2"/>
                    </g>
                </svg>

                <div className="flex items-center gap-1.5 text-sm md:text-base font-medium ">
                    <span>Loading</span>
                    <span className="flex gap-0.5">
                        <span className="h-2 w-2 animate-dot rounded-full bg-secondary" style={{animationDelay: '0s'}}/>
                        <span className="h-2 w-2 animate-dot rounded-full bg-secondary" style={{animationDelay: '0.15s'}}/>
                        <span className="h-2 w-2 animate-dot rounded-full bg-secondary" style={{animationDelay: '0.3s'}}/>
                    </span>
                </div>
            </div>

            <style>
                {`
                @keyframes glowPulse {
                0%, 100% { opacity: 0.6; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.08); }
                }
                @keyframes dotBounce {
                0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
               40% { opacity: 1; transform: translateY(-3px); }
               }
                @keyframes villaFade {
                0%, 76% { opacity: 1; }
                90%, 100% { opacity: 0; }
                }
                @keyframes drawGround {
                0% { stroke-dashoffset: 160; }
                9%, 100% { stroke-dashoffset: 0; }
                }
                @keyframes drawWing {
                0%, 9% { stroke-dashoffset: 55; }
                28%, 100% { stroke-dashoffset: 0; }
                }
                @keyframes drawHouse {
                0%, 18% { stroke-dashoffset: 207; }
                44%, 100% { stroke-dashoffset: 0; }
                }
                @keyframes drawDoor {
                0%, 44% { stroke-dashoffset: 76; }
                54%, 100% { stroke-dashoffset: 0; }
                }
                @keyframes drawWindow1 {
                0%, 54% { stroke-dashoffset: 56; }
                62%, 100% { stroke-dashoffset: 0; }
                }
                @keyframes drawWindow2 {
                0%, 60% { stroke-dashoffset: 56; }
                68%, 100% { stroke-dashoffset: 0; }
                }
                .animate-glow-pulse {
                animation: glowPulse 6s ease-in-out infinite;
                }
                .animate-dot {
                animation: dotBounce 1.1s ease-in-out infinite;
                }
                .animate-villa-fade {
                animation: villaFade 3.6s ease-in-out infinite;
                }
                .animate-draw-ground {
                animation: drawGround 3.6s ease-in-out infinite;
                }
                .animate-draw-wing {
                animation: drawWing 3.6s ease-in-out infinite;
                }
                .animate-draw-house {
                animation: drawHouse 3.6s ease-in-out infinite;
                }
                .animate-draw-door {
                animation: drawDoor 3.6s ease-in-out infinite;
                }
                .animate-draw-window1 {
                animation: drawWindow1 3.6s ease-in-out infinite;
                }
                .animate-draw-window2 {
                animation: drawWindow2 3.6s ease-in-out infinite;
                }
               `}
            </style>
        </div>
    );
}

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import {ChevronDown, Search} from "lucide-react";
import type { FilterSelectProps } from "../../types/componentsTypes.ts";

export default function SelectionBox({value, onChange, options, placeholder, icon: Icon,}: FilterSelectProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [panelPos, setPanelPos] = useState({ top: 0, left: 0, width: 0 });

    const triggerRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);

    const selected = options.find((o) => String(o.value) === String(value)) ?? null;

    const filtered = options.filter((o) =>
        o.label.toLowerCase().includes(search.toLowerCase())
    );

    const updatePos = useCallback(() => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        setPanelPos({
            top: rect.bottom + window.scrollY + 4,
            left: rect.left + window.scrollX,
            width: rect.width,
        });
    }, []);

    const handleOpen = () => {
        updatePos();
        setOpen((p) => !p);
    };

    useEffect(() => {
        if (!open) return;
        const t = setTimeout(() => searchRef.current?.focus(), 100);
        return () => {
            clearTimeout(t);
            setSearch("");
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const close = (e: MouseEvent) => {
            const panel = document.getElementById("selection-box-portal");
            if (
                triggerRef.current?.contains(e.target as Node) ||
                panel?.contains(e.target as Node)
            )
                return;
            setOpen(false);
        };
        const onScroll = () => { updatePos(); };
        document.addEventListener("mousedown", close);
        window.addEventListener("scroll", onScroll, true);
        return () => {
            document.removeEventListener("mousedown", close);
            window.removeEventListener("scroll", onScroll, true);
        };
    }, [open, updatePos]);

    const handleSelect = (val: string) => {
        onChange(val);
        setOpen(false);
    };

    const panel = open ? (
        <div
            id="selection-box-portal"
            style={{
                position: "absolute",
                top: panelPos.top,
                left: panelPos.left,
                width: panelPos.width,
                zIndex: 99999,
            }}
        >
            <div
                className="rounded-xl border border-border overflow-hidden "
                style={{ background: "var(--bg, #fff)", boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            >
                <div className="p-2 border-b border-border bg-bg">
                    <div className="flex items-center gap-3 bg-bg2 rounded-lg px-2">
                        <Search color="#999999" size={17}/>
                        <input
                            ref={searchRef}
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onMouseDown={(e) => e.stopPropagation()}
                            placeholder="search..."
                            className="w-full py-1.5 text-sm md:text-base outline-none placeholder-text-myGray/50! text-text-myGray!"
                        />
                    </div>
                </div>

                <ul
                    role="listbox"
                    className="max-h-52 overflow-y-auto p-1 bg-bg scrollbar-thin scrollbar-thumb-text-myGray"
                    onMouseDown={(e) => e.preventDefault()}
                >
                    {placeholder && (
                        <li
                            key="__placeholder__"
                            onClick={() => handleSelect("")}
                            className="px-3 py-2 text-sm rounded-lg cursor-pointer text-text-myGray! hover:bg-bg2 transition-colors"
                        >
                            {placeholder}
                        </li>
                    )}
                    {filtered.length === 0 ? (
                        <li className="text-center text-sm text-text-myGray! py-4">
                            Nothing found
                        </li>
                    ) : (
                        filtered.map((opt) => (
                            <li
                                key={opt.value}
                                role="option"
                                aria-selected={String(value) === String(opt.value)}
                                onClick={() => handleSelect(String(opt.value))}
                                className={`flex items-center justify-between px-3 py-2 text-sm md:text-base rounded-lg cursor-pointer transition-colors
                                 ${String(value) === String(opt.value)
                                    ? "bg-bg2 text-text-myGray! font-medium"
                                    : "text-text-myGray! hover:bg-bg2"
                                }`}
                            >
                                <span>{opt.label}</span>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    ) : null;

    return (
        <div className="relative">
            <div
                ref={triggerRef}
                onClick={handleOpen}
                className="flex items-center border border-border bg-bg hover:border-primary transition-colors rounded-xl p-2 cursor-pointer select-none"
            >
                {Icon && (
                    <Icon className="pointer-events-none z-10 mx-2" color="#999999"/>
                )}
                <span
                    className={`border-l border-border w-full text-sm md:text-base text-text-myGray!
                     ${Icon ? "pl-2 pr-3" : "px-3"}
                     ${!selected ? "" : ""}
                     `}
                >
                    {selected ? selected.label : placeholder}
                </span>
                <div className="border border-bg2 rounded-full bg-bg2 p-1 flex-shrink-0">
                    <ChevronDown
                        color="#999999"
                        size={16}
                        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                </div>
            </div>

            {createPortal(panel, document.body)}
        </div>
    );
}

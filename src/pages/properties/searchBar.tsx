import { useEffect, useRef, useState } from "react";
import type { SearchBarProps, SearchFilters } from "../../types/types.ts";
import { BUILD_YEARS, DEFAULT_FILTERS, LOCATIONS, PRICE_RANGES, PROPERTY_TYPES, SIZE_RANGES } from "../../data";
import { Box, Calendar, DollarSign, Home, MapPinIcon, Search, X } from "lucide-react";
import SelectionBox from "../../components/boxes/selectionBox.tsx";

export function SearchBar({ onSearch, loading }: SearchBarProps) {
    const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => onSearch(filters), 300);
        return () => {
            if (debounceRef.current) clearTimeout(debounceRef.current);
        };
    }, [filters]);

    const set = <K extends keyof SearchFilters>(key: K, value: SearchFilters[K]) =>
        setFilters(prev => ({ ...prev, [key]: value }));

    const hasActiveFilters =
        filters.query !== "" ||
        filters.location !== "" ||
        filters.type !== "" ||
        filters.priceRange > 0 ||
        filters.sizeRange > 0 ||
        filters.buildYear !== "Any Year";

    const clear = () => setFilters(DEFAULT_FILTERS);

    return (
        <div className="Wrapper relative my-6 ">
            <div className="flex flex-col gap-4 md:gap-0">
                <div className="relative w-full md:max-w-10/12 mx-auto md:bg-bg2 p-2 md:border border-bg2 " style={{ borderRadius: "15px 15px 0 0" }}>
                    <input
                        type="text"
                        placeholder="Search For A Property"
                        value={filters.query}
                        onChange={e => set("query", e.target.value)}
                        className="w-full h-15 md:h-18 border border-border bg-bg rounded-xl px-4 font-medium text-sm md:text-base placeholder:md:text-lg placeholder:text-base placeholder:text-text-myGray outline-none focus:border-primary transition-colors "
                    />
                    {filters.query && (
                        <button
                            onClick={() => set("query", "")}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-myGray! "
                        >
                            <X size={14} />
                        </button>
                    )}
                    <button
                        onClick={() => onSearch(filters)}
                        disabled={loading}
                        className="h-auto absolute right-4 bg-primary top-1/2 -translate-y-1/2 px-4 md:px-5 py-3 rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                        <Search size={15} />
                        <span className="hidden sm:inline">Find Property</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-bg2 px-4 py-6 md:p-2 border border-bg2 rounded-2xl">
                    <SelectionBox
                        value={filters.location}
                        onChange={value => set("location", value)}
                        options={LOCATIONS.map(l => ({ label: l, value: l }))}
                        placeholder="Location"
                        icon={MapPinIcon}
                    />
                    <SelectionBox
                        value={filters.type}
                        onChange={value => set("type", value)}
                        options={PROPERTY_TYPES.map(t => ({ label: t, value: t }))}
                        placeholder="Property Type"
                        icon={Home}
                    />
                    <SelectionBox
                        value={filters.priceRange}
                        onChange={value => set("priceRange", Number(value))}
                        options={PRICE_RANGES.map((r, i) => ({ label: r.label, value: i }))}
                        icon={DollarSign}
                    />
                    <SelectionBox
                        value={filters.sizeRange}
                        onChange={value => set("sizeRange", Number(value))}
                        options={SIZE_RANGES.map((r, i) => ({ label: r.label, value: i }))}
                        icon={Box}
                    />
                    <SelectionBox
                        value={filters.buildYear}
                        onChange={value => set("buildYear", value)}
                        options={BUILD_YEARS.map(y => ({
                            label: y === "Any Year" ? "Build Year" : y,
                            value: y,
                        }))}
                        icon={Calendar}
                    />
                </div>

            </div>

            {hasActiveFilters && (
                <div className="Wrapper absolute top-full mt-2 left-0 right-0 flex items-center gap-2 flex-wrap">
                    <span className="text-sm md:text-lg text-text-myGray!">Active filters:</span>

                    {filters.query && (
                        <span className="bg-bg text-text-myGray! border border-border text-xs md:text-base px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                            "{filters.query}" <button onClick={() => set("query", "")}><X size={16} color="#999999"/></button>
                        </span>
                    )}
                    {filters.location && (
                        <span className="bg-bg text-text-myGray! border border-border text-xs md:text-base px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                            {filters.location} <button onClick={() => set("location", "")}><X size={16} color="#999999"/></button>
                        </span>
                    )}
                    {filters.type && (
                        <span className="bg-bg text-text-myGray! border border-border text-xs md:text-base px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                            {filters.type} <button onClick={() => set("type", "")}><X size={16} color="#999999"/></button>
                        </span>
                    )}
                    {filters.priceRange > 0 && (
                        <span className="bg-bg text-text-myGray! border border-border text-xs md:text-base px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                            {PRICE_RANGES[filters.priceRange].label}
                            <button onClick={() => set("priceRange", 0)}><X size={16} color="#999999"/></button>
                        </span>
                    )}
                    {filters.sizeRange > 0 && (
                        <span className="bg-bg text-text-myGray! border border-border text-xs md:text-base px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                            {SIZE_RANGES[filters.sizeRange].label}
                            <button onClick={() => set("sizeRange", 0)}><X size={16} color="#999999"/></button>
                        </span>
                    )}
                    {filters.buildYear !== "Any Year" && (
                        <span className="bg-bg text-text-myGray! border border-border text-xs md:text-base px-2 md:px-3 py-1 rounded-full flex items-center gap-1">
                            {filters.buildYear}
                            <button onClick={() => set("buildYear", "Any Year")}><X size={16} color="#999999"/></button>
                        </span>
                    )}

                    <button onClick={clear} className="hidden md:block text-base text-text-myGray hover:text-white underline ml-auto cursor-pointer">
                        Clear all
                    </button>
                </div>
            )}
        </div>
    );
}

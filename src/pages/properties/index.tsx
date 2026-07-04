import { useState, useCallback } from "react";
import HeroSection from "./heroSection.tsx";
import PropertiesSection from "./propertiesSection.tsx";
import { SearchBar } from "./searchBar.tsx";
import type { SearchFilters } from "../../types/types.ts";
import { DEFAULT_FILTERS } from "../../data";
import {PurchaseForm} from "./purchaseForm.tsx";

const Properties = () => {
    const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
    const [loading, setLoading] = useState(false);

    const handleSearch = useCallback((f: SearchFilters) => {
        setFilters(f);
    }, []);

    return (
        <>
            <div className="block md:relative">
                <HeroSection />
                <div className="block md:absolute md:bottom-0 md:left-0 md:right-0 md:translate-y-1/2">
                    <SearchBar onSearch={handleSearch} loading={loading} />
                </div>
            </div>
            <PropertiesSection filters={filters} onLoadingChange={setLoading} loading={loading} />
            <PurchaseForm/>
        </>
    );
};

export default Properties;
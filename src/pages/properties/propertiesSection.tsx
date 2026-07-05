import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import type { PropertyProps, Props, SearchFilters } from "../../types/types.ts";
import { PRICE_RANGES, SIZE_RANGES } from "../../data";
import { PropertyCard } from "../../components/cards/propertyCard.tsx";
import { SkeletonCard } from "../../components/cards/skeletonCard.tsx";
import Title from "../../components/mainTitle";
import { EmptyState } from "../../data/extraConsts.tsx";
import sparkles from "../../assets/sparkles.png";
import Button from "../../components/button";
import { usePropertyStore } from "../../store/usePropertyStore.ts";

function applyFilters(properties: PropertyProps[], filters: SearchFilters): PropertyProps[] {
    return properties.filter(p => {
        if (filters.query) {
            const q = filters.query.toLowerCase();
            const hit =
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.location.toLowerCase().includes(q) ||
                p.type.toLowerCase().includes(q);
            if (!hit) return false;
        }

        if (filters.location && p.location !== filters.location) return false;
        if (filters.type && p.type !== filters.type) return false;

        const pr = PRICE_RANGES[filters.priceRange];
        if (p.priceRaw < pr.min || p.priceRaw > pr.max) return false;

        const sr = SIZE_RANGES[filters.sizeRange];
        if (p.size < sr.min || p.size > sr.max) return false;

        if (filters.buildYear !== "Any Year") {
            if (filters.buildYear === "Before 2020") {
                if (p.buildYear >= 2020) return false;
            } else {
                if (p.buildYear !== Number(filters.buildYear)) return false;
            }
        }
        return true;
    });
}

export default function PropertiesSection({ filters, onLoadingChange, loading }: Props) {
    const [showAll, setShowAll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true, align: "start", slidesToScroll: 1 });

    const { properties: allProperties, error, loadProperties } = usePropertyStore();

    const filtered = applyFilters(allProperties, filters);
    const carouselProperties = filtered.slice(0, 40);

    useEffect(() => {
        onLoadingChange(true);
        loadProperties().finally(() => onLoadingChange(false));
    }, [onLoadingChange, loadProperties]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.scrollTo(0);
    }, [filters, emblaApi]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi, onSelect]);

    const clearFilters = useCallback(() => {}, []);

    if (error) {
        return (
            <section className="py-12">
                <div className="Wrapper text-center py-20">
                    <p className="text-red-400 text-lg mb-2">Failed to load properties</p>
                    <p className="text-gray-500 text-sm">{error}</p>
                </div>
            </section>
        );
    }

    if (showAll) {
        return (
            <section className="my-16 md:mt-32 Wrapper ">
                <div className="flex items-center justify-between mb-6 relative">
                    <div>
                        <div className="flex items-center gap-2 mb-2 ">
                            <img src={sparkles} alt="Sparkles" className="md:w-20 h-auto" />
                        </div>
                        <h2 className=" text-3xl md:4xl font-bold">All Properties</h2>
                        <p className="text-text-myGray! text-sm md:text-base mt-2 max-w-lg">
                            {filtered.length} of {allProperties.length} properties
                        </p>
                    </div>
                    <div className=" absolute top-2/4 right-0">
                        <Button
                            icon={ArrowLeft}
                            text='Back to Featured'
                            color='secondary'
                            onClick={() => setShowAll(false)}
                        />
                    </div>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : filtered.length === 0 ? (
                    <EmptyState onClear={clearFilters} />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filtered.map((p, index) => (
                            <PropertyCard
                                key={p.id}
                                property={p}
                                allProperties={carouselProperties}
                                index={index}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }

    return (
        <section className="Wrapper my-16 md:mt-32 ">
            <Title
                title="Discover a World of Possibilities"
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                buttonProps={{
                    text: "View All Properties",
                    color: "secondary",
                    onClick: () => setShowAll(true),
                }}
            />
            {loading ? (
                <div className="flex gap-5 overflow-hidden">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex-none w-[85%] sm:w-[45%] md:w-[30%]">
                            <SkeletonCard />
                        </div>
                    ))}
                </div>
            ) : carouselProperties.length === 0 ? (
                <EmptyState onClear={clearFilters} />
            ) : (
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {carouselProperties.map((p, index) => (
                            <div
                                key={p.id}
                                className="flex-none w-[85%] sm:w-[45%] md:w-[30%] lg:w-[calc(29.333%-14px)] xl:w-[calc(27.333%-14px)]"
                            >
                                <PropertyCard
                                    property={p}
                                    allProperties={carouselProperties}
                                    index={index}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex items-center justify-between mt-6">
                <div className="md:hidden">
                    <Button
                        text='View All Properties'
                        color='secondary'
                        onClick={() => setShowAll(true)}
                    />
                </div>
                {!loading && carouselProperties.length > 0 && (
                    <p className="hidden md:block text-text-myGray! text-lg">
                        <span className="font-semibold ">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>{" "}
                        of {String(carouselProperties.length).padStart(2, "0")}
                    </p>
                )}

                <div className="flex items-center gap-2 ml-auto">
                    <button
                        onClick={scrollPrev}
                        disabled={loading}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-primary transition-colors hover:bg-[var(--color-primary,#7c3aed)]/10 disabled:opacity-40"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={loading}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-primary transition-colors hover:bg-[var(--color-primary,#7c3aed)]/10 disabled:opacity-40"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
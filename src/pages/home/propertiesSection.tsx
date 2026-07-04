import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { PropertyProps } from "../../types/types.ts";
import { PROPERTY_DATA, UNSPLASH_IDS } from "../../data";
import { PropertyCard } from "../../components/cards/propertyCard.tsx";
import { SkeletonCard } from "../../components/cards/skeletonCard.tsx";
import Title from "../../components/mainTitle";
import Button from "../../components/button";

function buildUnsplashUrl(photoId: string): string {
    return `https://images.unsplash.com/photo-${photoId}?w=800&q=80&fit=crop&auto=format`;
}

async function fetchProperties(): Promise<PropertyProps[]> {
    await new Promise(resolve => setTimeout(resolve, 600));
    return PROPERTY_DATA.map((item, i) => ({
        id: i + 1,
        ...item,
        image: buildUnsplashUrl(UNSPLASH_IDS[i % UNSPLASH_IDS.length]),
    }));
}

export default function PropertiesSection() {
    const navigate = useNavigate();
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        align: "start",
        slidesToScroll: 1,
    });

    useEffect(() => {
        fetchProperties()
            .then(data => {
                setProperties(data.slice(0, 40));
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

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

    return (
        <section className="Wrapper my-16 md:mt-32">
            <Title
                title="Discover a World of Possibilities"
                description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
                buttonProps={{
                    text: "View All Properties",
                    color: "secondary",
                    onClick: () => navigate("/properties"),
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
            ) : (
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {properties.map((p, index) => (
                        <div
                            key={p.id}
                            className="flex-none w-[85%] sm:w-[45%] md:w-[30%] lg:w-[calc(29.333%-14px)] xl:w-[calc(27.333%-14px)]"
                        >
                            <PropertyCard
                                property={p}
                                allProperties={properties}
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
                        text="View All Properties"
                        color="secondary"
                        onClick={() => navigate("/properties")}
                    />
                </div>

                {!loading && properties.length > 0 && (
                    <p className="hidden md:block text-text-myGray! text-lg">
                        <span className="font-semibold">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>{" "}
                        of {String(properties.length).padStart(2, "0")}
                    </p>
                )}

                <div className="flex items-center gap-2 ml-auto">
                    <button
                        onClick={scrollPrev}
                        disabled={loading}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-primary transition-colors disabled:opacity-40"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={loading}
                        className="w-9 h-9 flex items-center justify-center rounded-full border border-primary transition-colors disabled:opacity-40"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
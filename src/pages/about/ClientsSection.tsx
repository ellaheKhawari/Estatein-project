import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Client } from "../../types/types.ts";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Title from "../../components/mainTitle/index.tsx";
import { ClientCard } from "../../components/boxes/clientBox.tsx";

const clients: Client[] = [
    {
        name: "ABC Corporation",
        since: "2019",
        domain: "Domain",
        category: "Category",
        testimonial:
            "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
        websiteUrl: "#",
    },
    {
        name: "GreenTech Enterprises",
        since: "2018",
        domain: "Domain",
        category: "Category",
        testimonial:
            "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
        websiteUrl: "#",
    },
    {
        name: "Blue Horizon Ltd",
        since: "2021",
        domain: "Domain",
        category: "Category",
        testimonial:
            "Working with Estatein was an absolute pleasure. Their team guided us through every step and found us the perfect property.",
        websiteUrl: "#",
    },
];

export const ClientsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(clients.length);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: false,
        align: "start",
        slidesToScroll: 1,
    });

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
        const onReInit = () => {
            setCurrentIndex(emblaApi.selectedScrollSnap());
            setTotalSlides(emblaApi.scrollSnapList().length);
        };

        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onReInit);

        // مقدار اولیه
        setTimeout(() => {
            setTotalSlides(emblaApi.scrollSnapList().length);
        }, 0);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onReInit);
        };
    }, [emblaApi]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="Wrapper mx-auto my-24">
            <Title
                title="Our Valued Clients"
                description="At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
                buttonComponent={false}
            />

            {/* Embla Viewport */}
            <div className="overflow-hidden mb-4 md:mb-7" ref={emblaRef}>
                <div className="flex">
                    {clients.map((client) => (
                        <div
                            key={client.name}
                            className="flex-none w-full md:w-1/2 overflow-hidden p-4"
                        >
                            <ClientCard client={client} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4">
                <p className=" text-text-myGray! text-sm md:text-base">
                        <span className=" font-medium ">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>{" "}
                    of {String(totalSlides).padStart(2, "0")}
                </p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={scrollPrev}
                        className="w-7 md:w-9 h-7 md:h-9 flex items-center justify-center rounded-full border border-primary  transition-colors font-semibold"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-7 md:w-9 h-7 md:h-9 flex items-center justify-center rounded-full border border-primary  transition-colors font-semibold"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

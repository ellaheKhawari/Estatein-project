import Title from "../../components/mainTitle";
import type {CardProperty} from "../../types/types.ts";
import Button from "../../components/button";
import {useCallback, useEffect, useState} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {ArrowLeft, ChevronLeft, ChevronRight} from "lucide-react";
import {TITLES} from "../../data";

const Properties = (): CardProperty[] =>
    Array.from({length: 10}, (_, i) => ({
        id: i + 1,
        title: TITLES[i % TITLES.length] + (i >= TITLES.length ? ` ${Math.floor(i / TITLES.length) + 1}` : ""),
        description:
            "A stunning property offering modern amenities in a prime location with breathtaking views...",
    }));

const ALL_PROPERTIES = Properties();
const CAROUSEL_COUNT = 10;

const PropertyCard = ({property}: { property: CardProperty }) => (
    <div className="bg-bg border border-border rounded-xl overflow-hidden flex flex-col h-full">

        <div className="p-4 md:p-8 flex flex-col flex-1">
            <h3 className=" font-semibold mb-2 md:mb-3.5 text-xl ">{property.title}</h3>
            <p className="text-text-myGray! text-sm md:text-base mb-4 line-clamp-3">
                {property.description}{" "}
                <button className=" underline transition-colors">
                    Read More
                </button>
            </p>

            <div>
                <Button
                    text='Read More'
                    color='simple'
                />
            </div>

        </div>
    </div>
);

export default function FrequentlyAskedQuestionsSection() {
    const [showAll, setShowAll] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": {slidesToScroll: 1},
        },
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    const carouselProperties = ALL_PROPERTIES.slice(0, CAROUSEL_COUNT);

    if (showAll) {
        return (
            <section className=" py-12 ">
                <div className="Wrapper">

                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <h2 className=" text-3xl font-bold">All FAQ’s</h2>
                            <p className="text-text-myGray text-sm mt-2 max-w-lg">
                                Browse all {ALL_PROPERTIES.length} handpicked properties available through Estatein.
                            </p>
                        </div>
                        <Button
                            icon={ArrowLeft}
                            text='Back to Featured'
                            color='secondary'
                            onClick={() => setShowAll(false)}
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {ALL_PROPERTIES.map((p) => (
                            <PropertyCard key={p.id} property={p}/>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='py-12'>
            <div className="Wrapper">

                <Title
                    title='Frequently Asked Questions'
                    description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                    buttonProps={{
                        text: 'view All FAQ’s',
                        color: 'secondary',
                        type: 'submit',
                        onClick: () => setShowAll(true),
                    }}
                />

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {carouselProperties.map((p) => (
                            <div
                                key={p.id}
                                className="flex-none w-[85%] sm:w-[45%] md:w-[30%] lg:w-[calc(29.333%-14px)] xl:w-[calc(27.333%-14px)]"
                            >
                                <PropertyCard property={p}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">

                    {/*View All — mobile*/}
                    <div className='md:hidden '>
                        <Button
                            onClick={() => setShowAll(true)}
                            text='View All FAQ’s'
                            color='secondary'
                            type='submit'
                        />
                    </div>

                    <p className="hidden md:block text-text-myGray! text-lg">
                        <span className=" font-semibold">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>{" "}
                        of {String(CAROUSEL_COUNT).padStart(2, "0")}
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={scrollPrev}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary  transition-colors font-semibold"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary  transition-colors font-semibold"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

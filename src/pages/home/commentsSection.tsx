import Title from "../../components/mainTitle";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {fakeTestmonialst, type Testimonial} from "../../types/types.ts";
import Button from "../../components/button";

// ─── Star Rating ──────────────────────────────────────────────────────────────

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                fill={i < rating ? "#FFE500" : "none"}
                stroke={i < rating ? "#FFE500" : "#555"}
                className='border border-border w-7 h-7 p-1.5 md:w-9 md:h-9 md:p-2 bg-bg2 rounded-full'
            />
        ))}
    </div>
);

// ─── Testimonial Card ─────────────────────────────────────────────────────────

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className=" border border-border rounded-3xl p-5 md:p-10 flex flex-col h-full">
        <StarRating rating={testimonial.rating} />
        <h3 className="font-semibold text-lg mb-2">{testimonial.title}</h3>
        <p className="text-text-myGray! text-sm md:text-base leading-relaxed flex-1">{testimonial.review}</p>
        <div className="flex items-center gap-3 mt-1 pt-4 border-t border-border">
            <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <p className="text-sm md:text-base font-semibold">{testimonial.name}</p>
                <p className="text-sm md:text-base text-text-myGray! ">{testimonial.location}</p>
            </div>
        </div>
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CommentsSection() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        dragFree: true,
        align: "start",
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
        return () => { emblaApi.off("select", onSelect); };
    }, [emblaApi, onSelect]);

    return (
        <section className="py-12">
            <div className="Wrapper">

                {/* Header */}
                <Title
                    title='What Our Clients Say'
                    description='Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'
                    buttonProps={{
                        text: 'View All Testimonials',
                        color: 'secondary',
                        onClick: () => navigate("/testimonials"),
                    }}
                />


                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-5">
                        {fakeTestmonialst.map((t) => (
                            <div
                                key={t.id}
                                className="flex-none w-[85%] sm:w-[45%] md:w-[calc(27.333%-14px)]"
                            >
                                <TestimonialCard testimonial={t}/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6">
                    {/* View All — mobile */}

                    <div className='md:hidden'>
                        <Button
                            text='View All Testimonials'
                            color='secondary'
                            onClick={() => navigate("/testimonials")}
                        />
                    </div>

                    {/* Counter */}
                    <p className="hidden md:block text-text-myGray! text-lg">
                        <span className=" font-semibold">
                            {String(currentIndex + 1).padStart(2, "0")}
                        </span>{" "}
                        of {String(fakeTestmonialst.length).padStart(2, "0")}
                    </p>

                    {/* Arrows */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={scrollPrev}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary "
                        >
                            <ChevronLeft size={18}/>
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-primary "
                        >
                            <ChevronRight size={18}/>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}


import {useEffect, useState} from "react";
import { createPortal } from "react-dom";
import { X, MapPin, Ruler, Calendar } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { PropertyProps } from "../../types/types.ts";
import { Icon1, Icon2, Icon3 } from "../icons";

export const PropertyModal = ({properties, initialIndex, onClose,}: { properties: PropertyProps[]; initialIndex: number; onClose: () => void; }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        startIndex: initialIndex,
        loop: true,
        align: "center",  // ← مهمه
    });

    const [selectedIndex, setSelectedIndex] = useState(initialIndex);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()));
    }, [emblaApi]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    // بستن با کلید Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return createPortal(
        <div
            className="flex fixed Wrapper overflow-hidden inset-0 z-[999] items-center justify-center bg-bg/70 backdrop-blur-sm "
            onClick={onClose}
        >
            <div
                className=" bg-bg border border-border rounded-2xl w-full max-w-xl max-h-[60vh] "
                onClick={e => e.stopPropagation()}
            >
                {/* دکمه بستن */}
                <button
                    onClick={onClose}
                    className="absolute top-10 right-10 z-10 bg-bg border border-border rounded-full p-1.5 hover:bg-bg2 transition-colors"
                >
                    <X size={18} />
                </button>

                {/* Embla */}
                <div className="" ref={emblaRef}>
                    <div className="flex gap-4 ">
                        {properties.map((property, i) => (
                            <div
                                key={property.id}
                                className="flex-none w-full overflow-y-auto max-h-[85vh] bg-bg border border-border rounded-2xl transition-opacity duration-300"
                                style={{ opacity: i === selectedIndex ? 1 : 0.3 }}
                            >
                                {/* Image */}
                                <div className="relative h-60 md:h-72">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover rounded-t-2xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col gap-4">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-1">{property.title}</h2>
                                        <p className="text-text-myGray! text-sm md:text-base">{property.subtitle}</p>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        <div className="flex items-center gap-2 bg-bg2 border border-border rounded-xl px-3 py-2 text-sm md:text-base">
                                            <Icon2 /> {property.bedrooms} Bedroom
                                        </div>
                                        <div className="flex items-center gap-2 bg-bg2 border border-border rounded-xl px-3 py-2 text-sm md:text-base">
                                            <Icon3 /> {property.bathrooms} Bathroom
                                        </div>
                                        <div className="flex items-center gap-2 bg-bg2 border border-border rounded-xl px-3 py-2 text-sm md:text-base">
                                            <Icon1 /> {property.type}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2  text-sm md:text-base">
                                            <Ruler size={14} /> {property.size} m²
                                        </div>
                                        <div className="flex items-center gap-2  text-sm md:text-base">
                                            <MapPin size={14} /> {property.location}
                                        </div>
                                        <div className="flex items-center gap-2  text-sm md:text-base">
                                            <Calendar size={14} /> Built in {property.buildYear}
                                        </div>
                                    </div>

                                    <p className="text-text-myGray! text-sm md:text-base leading-relaxed">
                                        {property.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-2 border-t border-border">
                                        <div>
                                            <p className="text-text-myGray! text-sm md:text-base">Price</p>
                                            <p className=" text-xl md:text-2xl font-bold">{property.price}</p>
                                        </div>
                                        <button className="bg-primary font-semibold px-5 py-2.5 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity">
                                            Contact Agent
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
import type { PropertyProps } from "../../types/types.ts";
import { Icon1, Icon2, Icon3 } from "../icons";
import { useNavigate } from "react-router-dom";

export const PropertyCard = ({ property }: { property: PropertyProps; allProperties: PropertyProps[]; index: number; }) => {
    const navigate = useNavigate();

    const goToDetails = () => navigate(`/propertyDetails/${property.id}`);

    return (
        <div className="bg-bg border border-border rounded-xl overflow-hidden flex flex-col h-full p-7">
            <div className="relative overflow-hidden h-48">
                <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                />
            </div>

            <div className="pt-3 flex flex-col flex-1">
                <div className="mb-3">
                    <h3 className="font-semibold mb-1 text-xl leading-snug">{property.title}</h3>
                    <p className="text-text-myGray! text-sm md:text-base line-clamp-2">
                        {property.description}
                    </p>
                    <button className="text-sm md:text-base underline transition-colors" onClick={goToDetails}>
                        Read More
                    </button>
                </div>

                <div className="flex flex-wrap md:flex-nowrap gap-2">
                    <span className="flex items-center gap-1 bg-bg2 text-xs border border-border rounded-xl px-2 py-2">
                        <Icon2 /> {property.bedrooms}-Bedroom
                    </span>
                    <span className="flex items-center gap-1 bg-bg2 text-xs border border-border rounded-xl px-2 py-2">
                        <Icon3 /> {property.bathrooms}-Bathroom
                    </span>
                    <span className="flex items-center gap-1 bg-bg2 text-xs border border-border rounded-xl px-2 py-2">
                        <Icon1 /> {property.type}
                    </span>
                </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-3">
                <div>
                    <p className="text-text-myGray! font-medium">Price</p>
                    <p className="font-semibold text-lg md:text-xl">{property.price}</p>
                </div>
                <button
                    onClick={goToDetails}
                    className="bg-primary font-semibold px-3 py-2 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity"
                >
                    View Property Details
                </button>
            </div>
        </div>
    );
};
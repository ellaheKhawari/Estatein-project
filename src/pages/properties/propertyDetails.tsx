import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Ruler, Calendar, ArrowLeft } from "lucide-react";
import {usePropertyStore} from "../../store/usePropertyStore.ts";
import {Icon1, Icon2, Icon3} from "../../components/icons";

const PropertyDetails = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { loading, loadProperties, getPropertyById } = usePropertyStore();

    useEffect(() => {
        loadProperties();
    }, [loadProperties]);

    const property = id ? getPropertyById(id) : undefined;

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <p className="text-text-myGray!">Loading...</p>
            </div>
        );
    }

    if (!property) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <p className="text-lg text-text-myGray!">Property not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-primary font-semibold px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-sm md:text-base mb-6 text-text-myGray! hover:text-text transition-colors"
            >
                <ArrowLeft size={16} /> Back
            </button>

            <div className="bg-bg border border-border rounded-2xl overflow-hidden">
                <div className="relative h-72 md:h-96">
                    <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-1">{property.title}</h1>
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
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <Ruler size={14} /> {property.size} m²
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <MapPin size={14} /> {property.location}
                        </div>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                            <Calendar size={14} /> Built in {property.buildYear}
                        </div>
                    </div>

                    <p className="text-text-myGray! text-sm md:text-base leading-relaxed">
                        {property.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div>
                            <p className="text-text-myGray! text-sm md:text-base">Price</p>
                            <p className="text-xl md:text-2xl font-bold">{property.price}</p>
                        </div>
                        <button className="bg-primary font-semibold px-5 py-2.5 rounded-lg text-sm md:text-base hover:opacity-90 transition-opacity">
                            Contact Agent
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
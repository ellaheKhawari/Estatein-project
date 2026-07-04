import { useNavigate } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";
import {fakeTestmonialst, type Testimonial} from "../types/types.ts";

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} fill={i < rating ? "#F5A623" : "none"} stroke={i < rating ? "#F5A623" : "#555"} />
        ))}
    </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-[#1A1A2E] border border-[#2A2A4A] rounded-xl p-5 flex flex-col h-full">
        <StarRating rating={testimonial.rating} />
        <h3 className="text-white font-bold text-base mb-2">{testimonial.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{testimonial.review}</p>
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[#2A2A4A]">
            <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
                <p className="text-white text-sm font-semibold">{testimonial.name}</p>
                <p className="text-gray-400 text-xs">{testimonial.location}</p>
            </div>
        </div>
    </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestimonialsPage() {
    const navigate = useNavigate();

    return (
        <section className="bg-[#0D0D1A] min-h-screen px-4 py-12 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-white text-3xl font-bold mb-2">All Testimonials</h2>
                        <p className="text-gray-400 text-sm">
                            {fakeTestmonialst.length} reviews from our valued clients
                        </p>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 border border-[#2A2A4A] text-white text-sm px-4 py-2 rounded-lg hover:border-purple-500 transition-colors"
                    >
                        <ArrowLeft size={14} /> Back
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {fakeTestmonialst.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </div>

            </div>
        </section>
    );
}

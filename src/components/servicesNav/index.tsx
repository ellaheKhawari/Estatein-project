import { ArrowUpRight } from "lucide-react";
import type { servicesCardProps } from "../../types/types";

const ServicesCard = ({ value, label, src, href }: servicesCardProps) => {
    return (
        <a
            href={href}
            className=" group flex flex-col gap-4 rounded-2xl border border-border bg-bg2 p-6 relative cursor-pointer overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:border-secondary active:scale-95"
        >
            <span
                className=" absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full"
            />
            <div className="mx-auto w-14 md:w-16 transition-transform duration-300 group-hover:scale-110">
                <img src={src} alt={label} />
            </div>

            <ArrowUpRight
                color="#4D4D4D"
                className=" absolute top-4 right-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12"
            />

            <div className="md:min-h-9 text-center md:mt-3">
                <p className="mb-1">{label}</p>
                <p className="font-medium">
                    {value}
                </p>
            </div>
        </a>
    );
};

export default ServicesCard;
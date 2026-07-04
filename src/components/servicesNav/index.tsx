import {ArrowUpRight} from "lucide-react";
import type { servicesCardProps} from "../../types/types.ts";

const ServicesCard = ({ value, label , src }: servicesCardProps)  => {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-bg2 p-6 relative   justify-items-center ">
            <div className="mx-auto w-14 md:w-16">
                <img src={src} alt="" />
            </div>
            <ArrowUpRight color='#4D4D4D' className='absolute top-4 right-4'/>
            <div className='md:min-h-9 text-center md:mt-3'>
                <p className=" mb-1">{label}</p>
                <p className=" font-medium ">
                    {value}
                </p>
            </div>
        </div>
    )
}
export default ServicesCard;
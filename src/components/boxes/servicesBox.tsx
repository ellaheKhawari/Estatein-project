import type {ServicesCardProps} from "../../types/componentsTypes.ts";

export const ServicesBox = ({src , title , description} :ServicesCardProps) => {
    return (
        <div className="border border-border p-5 md:p-8 rounded-lg flex flex-col gap-4 md:gap-6 bg-bg">
            <div className="flex gap-4 items-center ">
                <img src={src} alt="" className="w-14 md:w-16 h-auto"/>
                <h4 className="text-xl md:text-2xl">{title}</h4>
            </div>
            <p className="text-text-myGray! text-sm md:text-base">{description}</p>
        </div>
    )
}

import type { ValuesProps} from "../../types/types.ts";

export const ValuesBoxes = ({icon:Icon , label, description } : ValuesProps) => {
    return (
        <>
            <section className="border-b last:border-b-0 md:border-b-0 md:odd:border-r border-border ">
                <div  className="flex gap-2 items-center my-2">
                    <div className="border rounded-full p-2 md:p-2.5 border-primary">
                        {Icon && <Icon fill="#946cf9" color="#946cf9" className="w-6 h-auto md:w-8" />}
                    </div>
                    <h2 className="font-medium text-lg">{label}</h2>
                </div>
                <div className="my-3">
                    <p className="text-text-myGray! text-sm md:text-base mb-4 md:mb-0">{description}</p>
                </div>
            </section>
        </>
    );
}
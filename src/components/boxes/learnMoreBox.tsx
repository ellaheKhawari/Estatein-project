import bg from "../../assets/background4.png"
import type {LearnMoreBoxProps} from "../../types/componentsTypes.ts";

export const LearnMoreBox = ({title, description , onclick}:LearnMoreBoxProps) => {
    return (
        <div className="border border-border bg-bg2 overflow-hidden rounded-lg ">
            <div className="w-full h-56 md:h-[12.5rem] bg-cover flex flex-col gap-3 p-7 md:p-10 justify-center  "
                style={{backgroundImage: `url(${bg})`}}>
                <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between ">
                    <h4 className="text-xl md:text-2xl">{title}</h4>
                    <button onClick={onclick} className="text-sm md:text-base border border-border rounded-lg bg-bg p-2  md:p-3">
                        Learn More
                    </button>
                </div>
                <p className="text-text-myGray! text-sm md:text-base">{description}</p>
            </div>
        </div>
    )
}
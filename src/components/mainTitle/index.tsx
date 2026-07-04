import sparkles from "../../assets/sparkles.png";
import type {TitleProps} from "../../types/componentsTypes.ts";
import Button from "../button";


const Title  = ({title , description, buttonProps , sparklesIcons , buttonComponent}:TitleProps) => {
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 md:mb-8 gap-4 relative">
                <div className="flex-1">
                    {sparklesIcons !== false &&
                        <div className="flex items-center gap-2 mb-2">
                            <img src={sparkles} alt="Sparkles" className='md:w-20 md:h-auto '/>
                            <span className="w-4 h-[1px] bg-border inline-block" />
                            <span className="w-2 h-[1px] bg-border inline-block" />
                        </div>
                    }
                    <h2 className=" text-3xl md:text-4xl font-bold mb-2">{title}</h2>
                    <p className="text-text-myGray! text-sm md:text-lg max-w-mx leading-relaxed md:max-w-4/6">
                        {description}
                    </p>
                </div>
                <div className='hidden md:block absolute bottom-5/12 right-0 '>
                    {buttonComponent !== false &&
                        <div>
                            <Button {...buttonProps}/>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default Title
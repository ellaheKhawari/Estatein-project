import {stats} from "../../data";
import mainbg from "../../assets/Image.svg";
import background from "../../assets/background3.png";
import Title from "../../components/mainTitle";

export const HeroSection = () => {
    return (
        <section className='Wrapper py-8 md:py-16'>
            <section className='flex justify-center items-center flex-col md:flex-row md:flex-nowrap'>
                <div className='flex-1/2 order-2 md:order-1 '>
                    <Title
                        title="Our Journey"
                        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                        buttonComponent={false}
                    />
                    <div className="grid grid-cols-2 justify-items-center! md:grid-cols-3 gap-4 text-start md:mr-8">
                        {stats.map((stat, index: number) => {
                            const isLast = index === stats.length - 1;
                            const isOdd = stats.length % 2 !== 0;
                            return (
                                <div
                                    key={stat.label}
                                    className={` 
                                    ' border-border! border bg-bg2 py-4 px-8 w-full text-center md:py-6 md:px-10 rounded-2xl '
                                     ${isLast && isOdd ? 'col-span-full mx-auto md:mx-0 md:col-span-1' : 'col-span-1'}
                                    `}
                                >
                                    <div className=" font-semibold text-2xl md:text-3xl ">{stat.value}</div>
                                    <div className="text-text-myGray! text-xs mt-0.5">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='flex-1/2 order-1 md:order-2 justify-end flex items-end mb-4 md:mb-0'>
                    <div className='relative w-full md:w-10/12 border border-border rounded-2xl overflow-hidden'>

                        <img
                            src={background}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <img
                            src={mainbg}
                            alt=""
                            className='relative z-10 w-full h-auto block'
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}
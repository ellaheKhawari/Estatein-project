import mainImage from "../../assets/mainImage.png";
import imageBg from "../../assets/bg2.png";
import {stats} from "../../data";
import circleImg from "../../assets/circleImg.png";
import mainImage2 from "../../assets/mainImage2.svg";

const Hero = () => {

    return (
        <>
            <section className='flex justify-center items-center min-h-[calc(100vh-17vh)] overflow-hidden relative'  >
                <div className='hidden md:block absolute md:top-0 md:right-0 md:w-1/2 h-full bg-cover bg-bg2  bg-center' style={{ backgroundImage: `url(${imageBg})` }}></div>
                <section className='container px-4 md:px-6 lg:px-8 flex justify-center items-center flex-col md:flex-row md:flex-nowrap lg:flex-row '>
                    <div className='hidden md:block absolute bottom-0 right-0 min-h-44'>
                        <img
                            src={mainImage2}
                            alt='Modern Building'
                            className=''
                        />
                    </div>
                    <div className='flex-1/2 order-2 md:order-1 py-8 md:py-16 '>
                        <h2 className='font-bold text-4xl md:text-6xl leading-tight mb-5'>
                             Discover Your Dream
                            <br/>
                            Property with Estatein
                        </h2>
                        <p className='text-text-myGray! font-medium leading-relaxed mb-6 md:mb-8 max-w-lg'>
                            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mb-12 text-sm md:text-lg">
                            <button className="border border-border hover:border-white/50  font-semibold px-7 py-3 rounded-lg transition-all ">
                                Learn More
                            </button>
                            <button className="bg-primary hover:bg-primary-65  font-semibold px-7 py-3 rounded-lg transition-colors  ">
                                Browse Properties
                            </button>
                        </div>

                        <div className="grid grid-cols-2 justify-items-center! md:grid-cols-3 gap-4 text-start md:mr-8">
                            {stats.map((stat,index:number) => {
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

                    <div className=' flex-1/2 order-1 md:order-2 '>
                        <img
                            src={mainImage}
                            alt='Modern Building'
                            className='w-full object-contain md:hidden'
                            style={{ filter: 'drop-shadow(0 0 40px #7c3aed33)' }}
                        />
                        <div className='absolute top-3/12 left-4 md:top-1/6 md:left-3/6 z-10 md:-translate-x-1/2  mr-5'>
                            <img
                                src={circleImg}
                                alt="circle"
                                className='w-24 md:w-30 '
                                style={{ animation: 'spin 25s linear infinite' }}
                            />
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}
export default Hero ;

/*
import mainImage from "../../assets/mainImage.png";
import imageBg from "../../assets/bg2.png";
import { stats } from "../../data";
import circleImg from "../../assets/circleImg.png";
import mainImage2 from "../../assets/mainImage2.svg";

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-[calc(100vh-17vh)] overflow-hidden">

            {/!* بک‌گراند سمت راست — فقط دسکتاپ *!/}
            <div
                className="hidden md:block absolute inset-y-0 right-0 w-1/2"
                style={{ backgroundImage: `url(${imageBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />

            {/!* تصویر گوشه پایین راست — فقط دسکتاپ *!/}
            <img
                src={mainImage2}
                alt=""
                aria-hidden="true"
                className="hidden md:block absolute bottom-0 right-0 pointer-events-none"
            />

            {/!* محتوای اصلی *!/}
            <div className="container relative z-10 px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">

                {/!* ─── ستون چپ: متن ─── *!/}
                <div className="w-full md:w-1/2 order-2 md:order-1 py-8 md:py-16">
                    <h1 className="font-bold text-4xl md:text-6xl leading-tight mb-5">
                        Discover Your Dream
                        <br />
                        Property with Estatein
                    </h1>

                    <p className="text-muted-foreground font-medium leading-relaxed mb-6 md:mb-8 max-w-lg">
                        Your journey to finding the perfect property begins here. Explore
                        our listings to find the home that matches your dreams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-12 text-sm md:text-lg">
                        <button className="border border-border hover:border-white/50 font-semibold px-7 py-3 rounded-lg transition-colors">
                            Learn More
                        </button>
                        <button className="bg-primary hover:opacity-80 font-semibold px-7 py-3 rounded-lg transition-opacity">
                            Browse Properties
                        </button>
                    </div>

                    {/!* استتس‌ها *!/}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {stats.map((stat, index: number) => {
                            const isLast = index === stats.length - 1;
                            const isOdd = stats.length % 2 !== 0;
                            return (
                                <div
                                    key={stat.label}
                                    className={`border border-border bg-bg2 py-4 px-6 rounded-2xl text-center
                                        ${isLast && isOdd ? "col-span-2 md:col-span-1 max-w-[50%] md:max-w-full mx-auto md:mx-0" : ""}
                                    `}
                                >
                                    <div className="font-semibold text-2xl md:text-3xl">{stat.value}</div>
                                    <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/!* ─── ستون راست: عکس + دایره ─── *!/}
                <div className="w-full md:w-1/2 order-1 md:order-2 relative flex justify-center items-center">

                    {/!* گلوی بنفش زیر ساختمان *!/}
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at center bottom, rgba(124,58,237,0.35) 0%, transparent 70%)",
                        }}
                    />

                    {/!* عکس ساختمان *!/}
                    <img
                        src={mainImage}
                        alt="Modern Building"
                        className="md:hidden relative z-10 w-full object-contain max-h-[70vh]"
                    />

                    {/!* دایره چرخان — گوشه عکس *!/}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 z-20 md:left-0 md:-translate-x-1/3">
                        <img
                            src={circleImg}
                            alt=""
                            aria-hidden="true"
                            className="w-24 md:w-30"
                            style={{ animation: "spin 25s linear infinite" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
*/

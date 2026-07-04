import mainBg from "../../assets/bg2.png";
import img1 from "../../assets/number1.png";
import img2 from "../../assets/number2.png";
import img3 from "../../assets/number3.png";
import img4 from "../../assets/number4.png";
import img5 from "../../assets/number5.png";
import img6 from "../../assets/number6.png";
import Title from "../../components/mainTitle";
import sparkles from "../../assets/sparkles.png";

export const GallerySection = () => {

    return (
        <section className="Wrapper my-12">
            <div
                className="p-6 md:p-10 border border-border bg-bg2 overflow-hidden rounded-2xl"
                style={{backgroundImage: `url(${mainBg})`}}
            >
                {/* ─── موبایل ─── */}
                <div className="flex flex-col gap-4 md:hidden">
                    {/* ردیف 1: دو عکس کنار هم */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-2xl">
                            <img src={img1} alt=""
                                 className="w-full min-h-20 object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <img src={img3} alt=""
                                 className="w-full min-h-20 object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                    </div>

                    {/* ردیف 2: یه عکس پهن + دو تا نصف */}
                    <div className="grid grid-cols-2 gap-3">
                        <div className="overflow-hidden rounded-2xl  ">
                            <img src={img2} alt=""
                                 className="w-full min-h-20 object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                        <div className="flex flex-row gap-x-3">
                            <div className="overflow-hidden rounded-2xl ">
                                <img src={img4} alt=""
                                     className="w-full min-h-20 object-cover transition-transform duration-500 hover:scale-105"/>
                            </div>
                            <div className="overflow-hidden rounded-2xl">
                                <img src={img5} alt=""
                                     className="w-full min-h-20 object-cover transition-transform duration-500 hover:scale-105"/>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col ">
                        {/* متن — زیر همه عکس‌ها */}
                        <div className="mt-2">
                            <Title
                                title="Explore Estatein&apos;s World"
                                description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
                                buttonComponent={false}
                            />
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <img src={img6} alt=""
                                 className="w-full object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                    </div>


                </div>

                {/* ─── دسکتاپ ─── */}
                <div className="hidden md:flex md:gap-5">

                    {/* ستون چپ: 2 عکس */}
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="overflow-hidden rounded-2xl">
                            <img src={img1} alt=""
                                 className="w-full object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                        <div className="overflow-hidden rounded-2xl">
                            <img src={img2} alt=""
                                 className="w-full  object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                        <div>

                            <div className="flex items-center gap-2 my-4">
                                <img src={sparkles} alt="Sparkles" className='md:w-20 md:h-auto'/>
                                <span className="w-4 h-[1px] bg-border inline-block"/>
                                <span className="w-2 h-[1px] bg-border inline-block"/>
                            </div>
                            <h2 className=" text-3xl md:text-4xl font-bold mb-2">Explore Estatein&apos;s World</h2>
                            <p className="text-text-myGray! text-sm md:text-lg leading-relaxed">
                                Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.
                            </p>
                        </div>
                    </div>

                    {/* ستون راست: 1 بزرگ + 2 کوچک + 1 پهن */}
                    <div className="flex flex-col gap-3 flex-1">
                        <div className="overflow-hidden rounded-2xl">
                            <img src={img3} alt=""
                                 className="w-full  object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="overflow-hidden rounded-2xl">
                                <img src={img4} alt=""
                                     className="w-fullobject-cover transition-transform duration-500 hover:scale-105"/>
                            </div>
                            <div className="overflow-hidden rounded-2xl">
                                <img src={img5} alt=""
                                     className="w-full object-cover transition-transform duration-500 hover:scale-105"/>
                            </div>
                        </div>
                        <div className=" overflow-hidden rounded-2xl">
                            <img src={img6} alt=""
                                 className="w-full  object-cover transition-transform duration-500 hover:scale-105"/>
                        </div>
                    </div>

                </div>

                {/* متن دسکتاپ — بیرون از گرید، زیر همه عکس‌ها */}
            </div>
        </section>
    );
}


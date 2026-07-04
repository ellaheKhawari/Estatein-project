import Title from "../../components/mainTitle";
import {ServicesBox} from "../../components/boxes/servicesBox.tsx";
import icon9 from "../../assets/icon9.png";
import icon18 from "../../assets/icon18.png";
import icon4 from "../../assets/icon4.png";
import icon13 from "../../assets/icon13.png";
import bg from "../../assets/background4.png";

export const SmartInvestments = () => {
    return (
        <section className="Wrapper my-6 md:my-24  ">
            <section className="flex flex-col md:flex-row gap-6 md:gap-10 ">
                <div className="w-full md:flex-1/3">
                    <Title
                        title="Smart Investments, Informed Decisions"
                        description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
                        buttonComponent={false}
                    />
                    <div className=" bg-cover flex flex-col  gap-5 p-7 md:p-10 justify-center bg-bg2 border border-border rounded-lg"
                         style={{backgroundImage: `url(${bg})`}}>

                        <h4 className="text-xl md:text-2xl">
                            Unlock Your Investment Potential
                        </h4>
                        <p className="text-text-myGray! text-sm md:text-base">
                            Explore our Property Management Service categories and let us handle the complexities while
                            you enjoy the benefits of property ownership.
                        </p>
                        <button className=" border border-border rounded-lg bg-bg p-3">
                            Learn More
                        </button>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 bg-bg2 w-full md:flex-2/3 p-3 md:p-5 rounded-lg my-6 ">
                    <ServicesBox
                        src={icon9}
                        title="Maintenance Ease"
                        description="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
                    />
                    <ServicesBox
                        src={icon18}
                        title="Financial Peace of Mind"
                        description="Managing property finances can be complex. Our financial experts take care of rent collection"
                    />
                    <ServicesBox
                        src={icon13}
                        title="Maintenance Ease"
                        description="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
                    />
                    <ServicesBox
                        src={icon4}
                        title="Financial Peace of Mind"
                        description="Managing property finances can be complex. Our financial experts take care of rent collection"
                    />
                </div>
            </section>
        </section>
    );
}
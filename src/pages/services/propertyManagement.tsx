import {ServicesBox} from "../../components/boxes/servicesBox.tsx";
import icon14 from "../../assets/icon9.png"
import icon12 from "../../assets/icon17.png"
import icon10 from "../../assets/icon16.png"
import icon4 from "../../assets/icon15.png"
import Title from "../../components/mainTitle";
import {LearnMoreBox} from "../../components/boxes/learnMoreBox.tsx";

export const PropertyManagement = () => {
    return (
        <section className="Wrapper my-12 md:my-24 flex gap-4 flex-wrap" >
            <Title
                title="Effortless Property Management"
                description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
                buttonComponent={false}
            />
            <div className="flex flex-col md:flex-1 gap-4 ">
                <ServicesBox
                    src={icon14}
                    title="Tenant Harmony"
                    description="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
                />
                <ServicesBox
                    src={icon4}
                    title="Legal Guardian"
                    description="Stay compliant with property laws and regulations effortlessly."
                />
            </div>
            <div className="flex flex-col flex-2 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <ServicesBox
                        src={icon12}
                        title="Maintenance Ease"
                        description="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
                    />
                    <ServicesBox
                        src={icon10}
                        title="Financial Peace of Mind"
                        description="Managing property finances can be complex. Our financial experts take care of rent collection"
                    />
                </div>
                <LearnMoreBox
                    title="Experience Effortless Property Management"
                    description="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
                    onclick={() => window.open()}
                />
            </div>
        </section>
    );
}
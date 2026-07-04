import {ServicesBox} from "../../components/boxes/servicesBox.tsx";
import icon9 from "../../assets/icon9.png"
import icon17 from "../../assets/icon17.png"
import icon16 from "../../assets/icon16.png"
import icon15 from "../../assets/icon15.png"
import Title from "../../components/mainTitle";
import {LearnMoreBox} from "../../components/boxes/learnMoreBox.tsx";

export const ServicesValueSection = () => {
    return (
        <section className="Wrapper my-6 md:my-12 flex gap-4 flex-wrap">
            <Title
                title="Unlock Property Value"
                description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
                buttonComponent={false}
            />
            <div className="flex flex-col md:flex-1 gap-4 ">
                <ServicesBox
                    src={icon9}
                    title="Valuation Mastery"
                    description="Discover the true worth of your property with our expert valuation services."
                />
                <ServicesBox
                    src={icon15}
                    title="Valuation Mastery"
                    description="Discover the true worth of your property with our expert valuation services."
                />
            </div>
            <div className="flex flex-col flex-2 gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <ServicesBox
                        src={icon17}
                        title="Strategic Marketing"
                        description="Selling a property requires more than just a listing; it demands a strategic marketing approach."
                    />
                    <ServicesBox
                        src={icon16}
                        title="Valuation Mastery"
                        description="Discover the true worth of your property with our expert valuation services."
                    />
                </div>
                <LearnMoreBox
                    title="Unlock the Value of Your Property Today"
                    description="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
                    onclick={() => window.open()}
                />
            </div>
        </section>
    );
}
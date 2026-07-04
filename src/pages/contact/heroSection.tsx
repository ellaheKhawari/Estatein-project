import Title from "../../components/mainTitle";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import ServicesCard from "../../components/servicesNav";
import type {servicesCardProps} from "../../types/types.ts";

export const Hero = () => {

    const contactInfo: servicesCardProps[] = [
        {
            src: icon5,
            label: "Email Address",
            value: "contact@estatein.com",
        },
        {
            src: icon6,
            label: "Phone Number",
            value: "+1 (123) 456-7890",
        },
        {
            src: icon7,
            label: "Office Address",
            value: "123 Estatein Plaza, City Center",
        },
        {
            src: icon8,
            label: "Working Hours",
            value: "Mon - Sat: 9 AM - 6 PM",
        },
    ];

    return (
        <section className="bg-gradient">
            <section className="Wrapper">
                <section className='py-12 md:py-24'>
                    <Title
                        title='Get in Touch with'
                        description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
                        sparklesIcons={false}
                        buttonComponent={false}
                    />
                </section>
                <section className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 text-center rounded-2xl font-medium text-sm md:text-base '>
                    {contactInfo.map((item) => (
                        <ServicesCard key={item.value} {...item} />
                    ))}
                </section>
            </section>
        </section>
    )
}
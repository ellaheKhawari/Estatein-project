import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import ServicesCard from "../../components/servicesNav";
import type {servicesCardProps} from "../../types/types.ts";

const ServicesSection  = () => {

    const services :servicesCardProps[] = [
        { label: "Find Your Dream Home", src: icon1 },
        { label: "Unlock Property Value", src: icon2 },
        { label: "Effortless Property Management", src: icon3 },
        { label: "Smart Investments, Informed Decisions", src: icon4 },
    ];

    return (
        <section className='Wrapper my-9 md:my-24'>
            <section className='grid grid-cols-2 md:grid-cols-4 w-full gap-4 text-center rounded-2xl font-medium text-sm md:text-base bg-bg   '>
                {services.map((services) => (
                    <ServicesCard key={services.label} {...services} />
                ))}
            </section>

        </section>
    );
}
export default ServicesSection;
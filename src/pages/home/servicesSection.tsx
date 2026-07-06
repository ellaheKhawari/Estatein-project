import ServicesCard from "../../components/servicesNav";
import {services} from "../../data";

const ServicesSection  = () => {
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
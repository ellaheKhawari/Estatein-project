import {HeroSection} from "./heroSection.tsx";
import {ServicesValueSection} from "./servicesValueSection.tsx";
import {PropertyManagement} from "./propertyManagement.tsx";
import {SmartInvestments} from "./SmartInvestments.tsx";
import ServicesSection from "../home/servicesSection.tsx";

const Services = () => {
    return (
        <>
            <HeroSection/>
            <ServicesSection/>
            <ServicesValueSection/>
            <PropertyManagement/>
            <SmartInvestments/>
        </>
    )
}
export default Services
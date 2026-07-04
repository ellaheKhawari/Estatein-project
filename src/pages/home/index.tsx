import FrequentlyAskedQuestionsSection from "./frequentlyAskedQuestionsSection.tsx";
import CommentsSection from "./commentsSection.tsx";
import Hero from "./heroSection.tsx";
import PropertiesSection from "./propertiesSection.tsx";
import ServicesSection from "./servicesSection.tsx";

export default function Home() {
    return (
        <>
            <Hero/>
            <ServicesSection/>
            <PropertiesSection/>
            <FrequentlyAskedQuestionsSection />
            <CommentsSection/>
        </>
    );
}
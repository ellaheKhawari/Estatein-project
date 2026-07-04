import {HeroSection} from "./heroSection.tsx";
import {ValuesSection} from "./valuesSection.tsx";
import {ClientsSection} from "./ClientsSection.tsx";
import {AchievementsSection} from "./achievementsSection.tsx";
import {ProcessSection} from "./processSection.tsx";
import {TeamSection} from "./teamSection.tsx";

const About = () => {
    return (
        <>
            <HeroSection/>
            <ValuesSection/>
            <AchievementsSection/>
            <ProcessSection/>
            <TeamSection/>
            <ClientsSection/>
        </>
    )
}
export default About
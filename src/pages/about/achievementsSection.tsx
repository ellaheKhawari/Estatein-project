import Title from "../../components/mainTitle";
import type {Achievements} from "../../types/types.ts";

export const AchievementsSection = () => {

    const achievements: Achievements[] = [
        {
            label: "3+ Years of Excellence",
            description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience."
        },
        {
            label: "Happy Clients",
            description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
        },
        {
            label: "Industry Recognition",
            description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
        }
    ];
    
    const AchievementsCard  = ({ item }: { item: Achievements }) => (
        <div className="border border-border rounded-2xl p-7 md:p-9 Shadow">
            <h2 className="text-lg md:text-2xl mb-2 md:mb-4">{item.label}</h2>
            <p className="text-text-myGray! max-w-11/12 text-sm md:text-base">{item.description}</p>
        </div>
    );
    
    return (
        <section className="Wrapper mb-12">
            <section>
                <Title
                    title="Our Achievements"
                    description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                    buttonComponent={false}
                />
                <section>
                    <div className="grid md:grid-cols-3 gap-6 md:gap-10 ">
                        {achievements.map((item) => (
                            <AchievementsCard key={item.label} item={item} />
                        ))}
                    </div>
                </section>
            </section>
        </section>
    );
}
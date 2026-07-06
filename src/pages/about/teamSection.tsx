import {TeamCard} from "../../components/cards/teamCards.tsx";
import Title from "../../components/mainTitle";
import {team} from "../../data";

export const TeamSection = () => {
    return (
        <section className="Wrapper my-24">
            <Title
                title="Meet the Estatein Team"
                description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                buttonComponent={false}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {team.map((member) => (
                    <TeamCard key={member.name} member={member}/>
                ))}
            </div>
        </section>
    );
};


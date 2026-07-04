
// placeholder images - replace with real imports
import team1 from "../../assets/team1.png";
import team2 from "../../assets/team2.png";
import team3 from "../../assets/team3.png";
import team4 from "../../assets/team4.png";
import type {TeamMember} from "../../types/types.ts";
import {TeamCard} from "../../components/cards/teamCards.tsx";
import Title from "../../components/mainTitle";

const team: TeamMember[] = [
    {
        name: "Maz Mitchell",
        role: "Founder",
        image: team1,
        twitterUrl: "#",
        telegramUrl: "#",
    },
    {
        name: "Sarah Johnson",
        role: "Chief Real Estate Officer",
        image: team2,
        twitterUrl: "#",
        telegramUrl: "#",
    },
    {
        name: "David Brown",
        role: "Head of Property Management",
        image: team3,
        twitterUrl: "#",
        telegramUrl: "#",
    },
    {
        name: "Michael Turner",
        role: "Legal Counsel",
        image: team4,
        twitterUrl: "#",
        telegramUrl: "#",
    },
];

export const TeamSection = () => {
    return (
        <section className="Wrapper my-24">
            {/* Header */}
            <Title
                title="Meet the Estatein Team"
                description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                buttonComponent={false}
            />

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {team.map((member) => (
                    <TeamCard key={member.name} member={member}/>
                ))}
            </div>
        </section>
    );
};


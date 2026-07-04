import Title from "../../components/mainTitle";
import type { ValuesProps} from "../../types/types.ts";
import {GraduationCap, Star, UsersRound} from "lucide-react";
import {ValuesBoxes} from "../../components/boxes/valuesBoxes.tsx";

export const ValuesSection = () => {

    const cardValues : ValuesProps[] = [
        {
            icon: Star,
            label:"Trust",
            description:"Trust is the cornerstone of every successful real estate transaction."
        },
        {
            icon: GraduationCap,
            label:"Excellence",
            description:"We set the bar high for ourselves. From the properties we list to the services we provide.",
        },
        {
            icon: UsersRound ,
            label:"Client-Centric",
            description:"Your dreams and needs are at the center of our universe. We listen, understand.",
        },
        {
            icon: Star,
            label:"Our Commitment",
            description:"We are dedicated to providing you with the highest level of service, professionalism, and support.",
        }
    ]

    return (
        <section className='Wrapper py-8 md:py-16 '>
            <section className='flex justify-center items-center flex-col md:flex-row md:flex-nowrap'>
                <div className='flex-1/3 order-1 md:order-1 '>
                    <Title
                        title="Our Values"
                        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                        buttonComponent={false}
                    />
                </div>
                <div className='flex-2/3 order-2 md:order-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 border-border border rounded-lg p-6 md:p-12 gap-5 Shadow'>
                        {cardValues.map((item) => (
                            <ValuesBoxes key={item.label} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
}
import Title from "../../components/mainTitle";

export const HeroSection = () => {
    return (
        <section className="bg-gradient py-12 md:py-24">
            <div className="Wrapper">
                <Title
                    title="Elevate Your Real Estate Experience"
                    description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
                    buttonComponent={false}
                    sparklesIcons={false}
                />
            </div>
        </section>
    )
}
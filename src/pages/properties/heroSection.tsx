import Title from "../../components/mainTitle";

const HeroSection = () => {
    return (
        <section className="py-12 md:py-24 border-b border-border bg-gradient">
            <div className="Wrapper">
                <Title
                    title="Find Your Dream Property"
                    description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
                    buttonComponent={false}
                    sparklesIcons={false}
                />
            </div>
        </section>
    );
}
export default HeroSection
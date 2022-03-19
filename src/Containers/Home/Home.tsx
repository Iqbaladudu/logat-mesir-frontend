import Layout from "../../Components/Layout/Layout";
import Hero from "./Hero/Hero";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <WhyUs />
        </Layout>
    );
}

export default Home;
import Layout from "../../Components/Layout/Layout";
import Hero from "./Hero/Hero";
import WhyShould from "./WhyShould/WhyShould";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
	return (
		<section className="overflow-hidden">
			<Layout>
				<Hero />
				<WhyUs />
				<WhyShould />
			</Layout>
		</section>
	);
};

export default Home;

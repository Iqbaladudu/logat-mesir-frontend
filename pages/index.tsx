import Head from "next/head";
import Home from "../src/Containers/Home/Home";

const Index = () => {
	return (
		<>
			<Head>
				<title>Belajar Bahasa Amiyah Mesir - Logat Mesir</title>
				<meta
					property="og:title"
					content="Belajar Bahasa Amiyah Mesir - Logat Mesir"
					key="title"
				/>
			</Head>
			<Home />
		</>
	);
};

export default Index;

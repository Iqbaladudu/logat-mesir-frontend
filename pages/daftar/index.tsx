import Head from "next/head";
import Container from "../../src/Components/Container/Container";
import Script from "next/script";
import Register from "../../src/Containers/Register/Register";

const index = () => {

    return (
        <>
            <Head>
                <title>Daftar - Logat Mesir</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Register />
        </>
    );
}

export default index;
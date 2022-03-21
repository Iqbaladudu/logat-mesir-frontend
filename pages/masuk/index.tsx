import Head from "next/head";
import Container from "../../src/Components/Container/Container";
import Login from "../../src/Containers/Login/Login";

const index = () => {

    return (
        <>
            <Head>
                <title>Masuk - Logat Mesir</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Login />
        </>
    );
}

export default index;
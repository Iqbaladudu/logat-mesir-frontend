import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Props {
    children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
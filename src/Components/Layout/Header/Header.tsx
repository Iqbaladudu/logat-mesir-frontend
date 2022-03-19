import Container from "../../Container/Container";
import styles from "./Header.module.css"
import Nav from "./Nav/Nav";
import clsx from "clsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container width="w-screen">
                <div className="flex">
                    <div className="flex items-center h-[111px] w-1/2">
                        <p className="text-white ml-7 font-extrabold text-3xl">Logat Mesir</p>
                    </div>
                    <div className="flex justify-center items-center h-[111px] w-1/2 gap-3">
                        <Nav />
                        <button className={clsx(styles.btn, 'btn btn-primary')}>Kontak Kami</button>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
import Container from "../../Container/Container";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";
import clsx from "clsx";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Container width="w-screen">
					<div className="flex">
						<div className="xl:hidden">
							<BurgerMenu pageWrapId={"page-wrap"} />
						</div>
						<div className="flex items-center h-[111px] w-1/2 overflow-hidden">
							<p className="text-white ml-7 font-extrabold text-3xl">Logat Mesir</p>
						</div>
						<div className="flex justify-end mr-5 xl:justify-center items-center h-[111px] w-1/2 xl:w-5/6 gap-3">
							<Nav />
							<button className={clsx(styles.btn, "xl:btn xl:btn-primary")}>
								Kontak Kami
							</button>
						</div>
					</div>
				</Container>
			</header>
		</>
	);
};

export default Header;

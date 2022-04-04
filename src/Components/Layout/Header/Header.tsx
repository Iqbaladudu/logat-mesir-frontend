import Container from "../../Container/Container";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";
import clsx from "clsx";

const Header = () => {
	return (
		<header className={styles.header}>
			<Container width="w-screen">
				<div className="flex">
					<div className="flex items-center h-[111px] w-1/2 overflow-hidden">
						<p className="text-white ml-7 font-extrabold text-3xl">Logat Mesir</p>
					</div>
					<div className="flex justify-end mr-5 xl:justify-center items-center h-[111px] w-1/2 xl:w-5/6 gap-3">
						<Nav />
						<div className="dropdown dropdown-end xl:hidden">
							<label tabIndex={0}>
								<button className="btn btn-square btn-ghost">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block w-5 h-5 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										></path>
									</svg>
								</button>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
							</ul>
						</div>
						<button className={clsx(styles.btn, "xl:btn xl:btn-primary")}>
							Kontak Kami
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;

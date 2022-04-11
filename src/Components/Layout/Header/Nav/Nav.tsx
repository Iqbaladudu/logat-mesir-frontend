import clsx from "clsx";
import NavItem from "../NavItem/NavItem";

interface Props {
	mobile?: boolean;
}

const Nav = ({ mobile }: Props) => {
	return (
		<>
			<nav
				className={clsx(
					"gap-3 btn-group xl:rounded-lg",
					mobile ? "flex-col xl:hidden" : "hidden xl:flex"
				)}
			>
				<NavItem burger={mobile ? true : false} label="Beranda" href="/" />
				<NavItem burger={mobile ? true : false} label="Kursus" href="/" />
				<NavItem burger={mobile ? true : false} label="Daftar" href="/daftar" />
				<NavItem burger={mobile ? true : false} label="Komunitas" href="/" />
			</nav>
		</>
	);
};

export default Nav;

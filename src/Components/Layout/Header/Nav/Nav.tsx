import NavItem from "../NavItem/NavItem";

const Nav = () => {
	return (
		<>
			<nav className="hidden xl:btn-group xl:rounded-lg">
				<NavItem label="Beranda" href="/" />
				<NavItem label="Kursus" href="/" />
				<NavItem label="Daftar" href="/daftar" />
				<NavItem label="Komunitas" href="/" />
			</nav>
		</>
	);
};

export default Nav;

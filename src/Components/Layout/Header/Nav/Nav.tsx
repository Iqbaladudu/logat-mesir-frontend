import NavItem from "../NavItem/NavItem"

const Nav = () => {
    return (
        <>
            <nav className="btn-group rounded-lg">
                <NavItem label="Beranda" href="/" />
                <NavItem label="Kursus" href="/" />
                <NavItem label="Komunitas" href="/" />
            </nav>
        </>
    )
}

export default Nav
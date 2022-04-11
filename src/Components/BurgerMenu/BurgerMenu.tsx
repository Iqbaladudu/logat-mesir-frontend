import { slide as Menu, Props } from "react-burger-menu";
import Nav from "../Layout/Header/Nav/Nav";

const BurgerMenu = (props: Props) => {
	const styles = {
		bmBurgerButton: {
			position: "fixed",
			width: "36px",
			height: "30px",
			right: "10%",
			top: "5%",
		},
		bmBurgerBars: {
			background: "#373a47",
		},
		bmBurgerBarsHover: {
			background: "#a90000",
		},
		bmCrossButton: {
			height: "24px",
			width: "24px",
		},
		bmCross: {
			background: "#bdc3c7",
		},
		bmMenuWrap: {
			position: "fixed",
			height: "100%",
		},
		bmMenu: {
			background: "#373a47",
			padding: "2.5em 1.5em 0",
			fontSize: "1.15em",
		},
		bmMorphShape: {
			fill: "#373a47",
		},
		bmItemList: {
			color: "#b8b7ad",
			padding: "0.8em",
		},
		bmItem: {
			display: "inline-block",
			color: "#d1d1d1",
			marginBottom: "10px",
			textAlign: "left",
			textDecoration: "none",
			transition: "color 0.2s",
		},
		bmOverlay: {
			background: "rgba(0, 0, 0, 0.3)",
		},
	};
	return (
		<Menu styles={styles} noOverlay width={"auto"} right>
			<Nav mobile />
		</Menu>
	);
};

export default BurgerMenu;

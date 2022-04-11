import Link from "next/link";
import styles from "./NavItem.module.css";
import clsx from "clsx";

type Props = {
	label: string;
	href: string;
	active?: boolean;
	burger?: boolean;
};

const NavItem = ({ label, href, active, burger }: Props) => {
	return (
		<button
			className={clsx(
				burger ? styles.burger : styles.button,
				active && styles.active
			)}
		>
			<Link href={href}>
				<a className="font-label font-bold h-auto w-auto px-1 py-1">{label}</a>
			</Link>
		</button>
	);
};

export default NavItem;

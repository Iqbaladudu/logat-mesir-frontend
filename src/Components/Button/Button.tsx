import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

export type Props = {
	label: string;
	secondary?: Boolean;
	def?: Boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	disable?: boolean;
};

const Button: React.FC<Props> = ({
	label,
	secondary,
	def,
	onClick,
	className,
	type,
	disable = false,
}) => {
	return onClick ? (
		<button
			type={type}
			disabled={disable}
			onClick={onClick}
			className={clsx(
				styles.button,
				className,
				secondary && styles.buttonsecondary
			)}
		>
			{label}
		</button>
	) : (
		<button
			type={type}
			disabled={disable}
			className={clsx(
				styles.button,
				className,
				def && styles.default,
				secondary && styles.buttonsecondary
			)}
		>
			{label}
		</button>
	);
};

export default Button;

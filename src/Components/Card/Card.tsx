import { ReactNode } from "react";
import clsx from "clsx";
import styles from "./Card.module.css";

export interface Props {
	className: string;
	headerText?: ReactNode;
	headerStyle?: string;
	bodyText?: string;
	bodyStyle?: string;
	customized?: boolean;
	children?: ReactNode;
}

const Card: React.FC<Props> = ({
	className,
	headerText,
	headerStyle = "",
	bodyText = "",
	bodyStyle = "",
	customized,
	children = "",
}) => {
	return (
		<>
			{customized && children ? (
				<div className={clsx(styles.card, className)}>{children}</div>
			) : (
				<div className={clsx(styles.card, className)}>
					<div className={headerStyle}>
						<h1>{headerText}</h1>
					</div>
					<div className={bodyStyle}>{bodyText ? bodyText : children}</div>
				</div>
			)}
		</>
	);
};

export default Card;

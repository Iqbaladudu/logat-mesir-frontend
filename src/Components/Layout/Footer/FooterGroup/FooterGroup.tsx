import Link from "next/link";
import type { MouseEventHandler } from "react";
import Button, { Props as ButtonProps } from "../../../Button/Button";
import styles from "./FooterGroup.module.css";

type LiProps = {
	label: string;
	href: string;
};

export enum Types {
	List = "list",
	Hero = "hero",
}

export interface ListFormat {
	label: string;
	url: string;
}

interface Props {
	title?: string | string[];
	type: Types;
	list?: ListFormat[];
	desc?: string;
	button?: ButtonProps;
}

const Li = ({ label, href }: LiProps) => {
	return (
		<Link href={href}>
			<a className="link link-hover font-semibold text-[15px  ] xl:text-[30px] xl:leading-[45px] text-blue-secondary">
				{label}
			</a>
		</Link>
	);
};

const FooterGroup = ({ title, type, list, desc, button }: Props) => {
	return (
		<div>
			{type === Types.Hero && button && Array.isArray(title) ? (
				<div className="flex items-center flex-col gap-[25px] xl:gap-[50px] xl:ml-[157px]">
					<div className={styles.herotitle}>
						<div className="text-blue-secondary">{title[0]}</div>
						<div className="text-yellow-lm">
							<span className="text-blue-secondary">{title[1][0]}</span>{" "}
							{title[1].slice(1)}
						</div>
					</div>
					<div className="w-4/6 xl:w-[378px] text-[20px] xl:text-[24px] text-blue-secondary">
						{desc}
					</div>
					<div>
						<Button {...button} />
					</div>
				</div>
			) : (
				<div className="flex flex-col">
					<span className="xl:pb-[27px] font-semibold text-blue-secondary text-[20px] xl:text-[48px] xl:leading-[72px]">
						{title}
					</span>
					{list?.map(({ label, url }, index) => (
						<Li label={label} href={url} key={index} />
					))}
				</div>
			)}
		</div>
	);
};

export default FooterGroup;

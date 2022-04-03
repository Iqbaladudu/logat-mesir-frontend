import Link from "next/link";
import VideoCard from "../../../Components/Card/VideoCard/VideoCard";
import Container from "../../../Components/Container/Container";
import SplitContainer from "../../Dashboard/SplitContainer/SplitContainer";
import yellowAssets from "/public/footer-assets.svg";
import redAssets from "/public/footer-assets-2.svg";
import Image from "next/image";
import styles from "./CourseModule.module.css";

interface ListProps {
	url: string;
	className: string;
	text: string;
}

const listItem: Pick<ListProps, "text" | "url">[] = [
	{
		url: "",
		text: "Materi 1",
	},
	{
		url: "",
		text: "Materi 2",
	},
	{
		url: "",
		text: "Materi 3",
	},
];

const List = ({ url, className, text }: ListProps) => {
	return (
		<li className={className}>
			<Link href={url}>
				<a>{text}</a>
			</Link>
		</li>
	);
};

const CourseModule = () => {
	return (
		<section className="overflow-hidden relative">
			<Container
				width="w-screen"
				height="h-screen"
				flex="flex justify-center items-center"
			>
				<SplitContainer className="gap-[90px]">
					<div className="flex-1 flex justify-center items-end flex-col gap-[30px]">
						<p className="font-medium text-[48px] leading-[72px] text-blue-secondary">
							Nama Pelajaran
						</p>
						<VideoCard />
					</div>
					<div className="flex-1 flex items-start flex-col">
						<p className="font-medium text-[48px] leading-[72px] text-blue-secondary">
							Materi Belajar
						</p>
						<ul className="list-none flex flex-col gap-3">
							{listItem.map((item, index) => (
								<List
									className="font-semibold text-[30px] leading-[45px] text-blue-secondary"
									{...item}
									key={index}
								/>
							))}
						</ul>
					</div>
				</SplitContainer>
				<div className={styles.yellow}>
					<Image src={yellowAssets} height="110" width="110" alt="" />
				</div>
				<div className={styles.red}>
					<Image src={redAssets} height="110" width="110" alt="" />
				</div>
			</Container>
		</section>
	);
};

export default CourseModule;

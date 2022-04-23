import Card, { Props as CardProps } from "../../../Components/Card/Card";
import Container from "../../../Components/Container/Container";
import styles from "./WhyUs.module.css";
import LeftAssets from "/public/why-us-asset.svg";
import WhyUsLine from "/public/whyusline.svg";
import WhyUsDots from "/public/whyusdots.svg";
import Image from "next/image";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupIcon from "@mui/icons-material/Group";

const cardProps: CardProps[] = [
	{
		className: styles.card,
		headerText: <LibraryBooksIcon fontSize="large" />,
		headerStyle: styles.headerText,
		bodyText: "Mendapat buku cetak & PDF kosakata",
		bodyStyle: styles.bodyText,
	},
	{
		className: styles.card,
		headerText: <AccessTimeFilledIcon fontSize="large" />,
		headerStyle: styles.headerText,
		bodyText: "Konsultasi 24 jam dengan tutor",
		bodyStyle: styles.bodyText,
	},
	{
		className: styles.card,
		headerText: <VerifiedIcon fontSize="large" />,
		headerStyle: styles.headerText,
		bodyText: "Tutor berpengalaman",
		bodyStyle: styles.bodyText,
	},
	{
		className: styles.card,
		headerText: <GroupIcon fontSize="large" />,
		headerStyle: styles.headerText,
		bodyText: "Group WA komunitas bahasa Amiyah Mesir",
		bodyStyle: styles.bodyText,
	},
];

const WhyUs = () => {
	return (
		<section className="overflow-hidden">
			<Container width="w-screen" height="h-auto py-[50px] xl:py-0 xl:h-[730px]">
				<div className="flex w-full h-full flex-col text-blue-secondary justify-center items-center gap-[64px] relative overflow-hidden">
					<div className="flex flex-col p-5 text-[30px] xl:text-[48px] leading-[72px] font-medium w-[400px] xl:w-[537px] overflow-hidden">
						<h1 className="text-center">Kenapa harus belajar di Logat Mesir?</h1>
						<p className="  flex justify-center text-center">
							<Image src={WhyUsLine} width={315} height={10} alt="" />
						</p>
					</div>
					<div className="flex justify-center flex-wrap items-center gap-[71px]">
						{cardProps.map((props, index) => (
							<Card {...props} key={index} />
						))}
					</div>
					<div className={styles.assetsLeft}>
						<Image src={LeftAssets} height={200} width={200} alt="" />
					</div>
					<div>
						<Image src={WhyUsDots} height={10} width={47} alt="" />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default WhyUs;

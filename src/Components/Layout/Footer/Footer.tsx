import styles from "./Footer.module.css";
import FooterGroup, { ListFormat, Types } from "./FooterGroup/FooterGroup";
import { Props as ButtonProps } from "../../Button/Button";
import Image from "next/image";
import FooterLeftAsset from "/public/footer-assets.svg";
import FooterRightAsset from "/public/footer-assets-2.svg";

const services: Array<ListFormat> = [
	{ label: "Kursus", url: "/" },
	{ label: "Kamus Digital", url: "/" },
	{ label: "Video Belajar", url: "/" },
	{ label: "Konsultasi", url: "/" },
	{ label: "Komunitas", url: "/" },
];

const socialMedia: Array<ListFormat> = [
	{ label: "Instagram", url: "/" },
	{ label: "Facebook", url: "/" },
	{ label: "WhatsApp", url: "/" },
	{ label: "Tiktok", url: "/" },
];

const OnclickHandler = () => {
	alert("Check");
};

const heroButton: ButtonProps = {
	label: "Contact Us",
	onClick: OnclickHandler,
	className:
		"btn xl:w-[278px] xl:h-[67px] shadow-[0_5px_7px_rgba(0,0,0,0.25)] xl:rounded-[20px] xl:leading-[54px]",
};

const heroTitle = ["Logat Mesir", "& La.Adry"];

const Footer = () => {
	return (
		<>
			<footer className="flex flex-wrap xl:flex-nowrap overflow-hidden h-auto py-10 gap-10 xl:h-[661px] relative">
				<div className={styles.leftAsset}>
					<Image src={FooterLeftAsset} height={114} width={111} alt="" />
				</div>
				<div className={styles.rightAsset}>
					<Image src={FooterRightAsset} height={156} width={143} alt="" />
				</div>
				<div className="z-50">
					<FooterGroup
						type={Types.Hero}
						title={heroTitle}
						desc="Full one page untuk online course yang meyediakan berbagai ilmu dalam bentuk online/daring"
						button={heroButton}
					/>
				</div>
				<div className={styles.listwrapper}>
					<FooterGroup type={Types.List} title="Produk" list={services} />
					<FooterGroup type={Types.List} title="Sosial Media" list={socialMedia} />
				</div>
			</footer>
			<div className="flex justify-center text-center text-white items-center xl:h-[86px] bg-[#FF002E] font-semibold xl:font-bold xl:text-[24px] xl:leading-[36px]">
				<p>Copyright@ La.Adry & Logat Mesir</p>
			</div>
		</>
	);
};

export default Footer;

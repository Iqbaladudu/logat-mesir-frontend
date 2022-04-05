import Button from "../../../Components/Button/Button";
import Container from "../../../Components/Container/Container";
import Image from "next/image";
import RightAssets from "/public/RightWhyShouldUs.png";
import TinyRightAsset from "/public/footer-assets.svg";
import styles from "./WhyShould.module.css";
import TriagleYellow from "/public/triagleYellow.svg";

const WhyShould = () => {
	return (
		<section className="overflow-hidden">
			<Container width="w-screen" height="h-auto py-10 xl:h-[730px]">
				<div className="flex justify-center items-center relative">
					<div className="flex font-medium flex-col items-center text-blue-secondary gap-[37px]">
						<div className="text-[35px] flex xl:text-[64px] leading-[96px] flex-wrap text-center xl:w-[715px] z-50">
							Kenapa Harus belajar Ammiyah Mesir?
						</div>
						<div className="text-[24px] leading-[36px] w-[378px] text-center z-50">
							Full one page untuk online course yang meyediakan berbagai ilmu dalam
							bentuk online/daring
						</div>
						<div>
							<Button
								label="Join with Us"
								className="btn xl:w-[278px] h-[50px] xl:h-[67px] shadow-[0_5px_7px_rgba(0,0,0,0.25)] rounded-[5px] xl:rounded-[20px] leading-[54px];"
							/>
						</div>
					</div>
					<div className="hidden xl:flex">
						<Image src={RightAssets} width={696} height={589} alt="" />
					</div>
					<div className={styles.rightAsset}>
						<Image src={TinyRightAsset} height={156} width={143} alt="" />
					</div>
					<div className={styles.triagleAsset}>
						<Image src={TriagleYellow} height={156} width={143} alt="" />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default WhyShould;

import Container from "../../../Components/Container/Container";
import Image from "next/image";
import { useRouter } from "next/router";
import WhyUsLine from "/public/whyusline.svg";
import ControlledAccordions from "./Accordion/Accordion";

const WhyShould = () => {
	const router = useRouter();
	return (
		<section className="overflow-hidden my-10">
			<Container width="w-screen" height="h-auto py-10 xl:h-[730px]">
				<div className="flex justify-center items-center relative">
					<div className="flex justify-center font-medium flex-col items-center text-blue-secondary gap-[37px]">
						<div className="flex flex-col p-5 text-[30px] xl:text-[48px] leading-[72px] font-medium w-[400px] xl:w-[537px] overflow-hidden">
							<h1 className="text-center">Frequently Asked Questions</h1>
							<p className="  flex justify-center text-center">
								<Image src={WhyUsLine} width={315} height={10} alt="" />
							</p>
						</div>
						<ControlledAccordions />
					</div>
				</div>
			</Container>
		</section>
	);
};

export default WhyShould;

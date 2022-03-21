import Button from "../../../Components/Button/Button";
import Container from "../../../Components/Container/Container";
import HeroLeftAssets from '/public/HeroSVG.svg';
import HumanSVG from '/public/HeroObject.svg';
import HeroDots from '/public/Dots.svg';
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <section className="overflow-hidden">
            <Container width="w-screen" height="h-[730px]">
                <div className="flex justify-center items-center gap-80 h-full w-full relative">
                    <div className="flex flex-col gap-10 text-blue-secondary w-[551px] z-50">
                        <div className="font-semibold text-[54px] leading-[81px]">
                            <h1>Mari Belajar Bahasa Ammiyah Mesir</h1>
                        </div>
                        <div className="font-semibold text-[24px] leading-[36px]">
                            Lebih Mudah dengan Metode yang Asik dan Seru
                        </div>
                        <div>
                            <Button label="Ayo Belajar" className="btn w-[278px] h-[67px] shadow-[0_5px_7px_rgba(0,0,0,0.25)] rounded-[20px] leading-[54px]" />
                        </div>
                    </div>
                    <div>
                        <Image src={HeroLeftAssets} width={744} height={574} />
                    </div>
                    <div className={styles.humansvg}>
                        <Image src={HumanSVG} width={744} height={574} />
                    </div>
                    <div className={styles.herodot}>
                        <Image src={HeroDots} width={158} height={158} />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero
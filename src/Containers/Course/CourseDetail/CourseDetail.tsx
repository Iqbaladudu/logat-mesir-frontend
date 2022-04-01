import Button from '../../../Components/Button/Button'
import Container from '../../../Components/Container/Container'
import SplitContainer from '../../Dashboard/SplitContainer/SplitContainer'
import Line from '/public/whyusline.svg'
import Image from 'next/image'
import Card from '../../../Components/Card/Card'
import VideoIcon from '/public/VideoIcon.svg'
import clsx from 'clsx'

const CourseDetail = () => {
    return (
        <section className="overflow-hidden">
            <Container width="w-screen" height="h-screen" flex="flex flex-col">
                <div className="flex-1">
                    <SplitContainer>
                        <div className="flex-1 flex flex-col items-center">
                            <div className="flex flex-col items-start gap-[39px]">
                                <div>
                                    <p className="font-medium text-[64px] leading-[64px] text-blue-secondary w-[492px]">
                                        Belajar Amiyah itu Asik
                                    </p>
                                </div>
                                <div>
                                    <Image src={Line} alt="" />
                                </div>
                                <Button
                                    label="Belajar"
                                    className="btn w-[275px] h-[67px] shadow-[0_5px_7px_rgba(0,0,0,0.25)] rounded-[20px] leading-[54px] bg-red-lm"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex">
                            <Card className="w-[599px] h-[300px] bg-blue-core rounded-[20px]">
                                <div className="flex justify-center items-center w-[180px] h-[180px] bg-white rounded-full">
                                    <Image
                                        src={VideoIcon}
                                        height="104"
                                        width="104"
                                        alt=""
                                    />
                                </div>
                            </Card>
                        </div>
                    </SplitContainer>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-[32px]">
                    <div>
                        <p className="text-[48px] leading-[72px] font-medium text-blue-secondary">
                            Materi Belajar
                        </p>
                    </div>
                    <div className="flex flex-row gap-[51px]">
                        {[1, 2, 3, 4].map((_, index) => (
                            <Card
                                customized
                                className={clsx(
                                    'w-[237px] h-[106px] bg-red-lm rounded-[10px]'
                                )}
                                key={index}
                            >
                                <p className="text-white font-medium text-[36px] leading-[53px]">
                                    Card text
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CourseDetail

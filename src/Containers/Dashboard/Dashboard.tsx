import Container from "../../Components/Container/Container";
import SplitContainer from "./SplitContainer/SplitContainer";
import styles from "./Dashboard.module.css"
import Card from "../../Components/Card/Card";
import Search from "./Search/Search";
import messageIcon from "/public/messageIcon.svg"
import notifIcon from "/public/notifIcon.svg"
import Image from "next/image";

const Dashboard = () => {
    return (
        <section className="overflow-hidden">
            <Container width="w-screen" height="h-screen">
                <SplitContainer>
                    <Card className="w-[354px] h-[684px] bg-yellow-lm rounded-lg">
                        
                    </Card>
                    <div className="h-full w-full flex flex-col justify-center items-center gap-[69px]">
                        <Search />
                        <Card customized={true} className="w-[416px] h-[473px] bg-blue-core rounded-lg">
                        </Card>
                    </div>
                    <div className="h-full w-[347px] flex flex-col gap-[70px] justify-center items-center">
                        <div className="flex w-full gap-[40px] justify-start items-start">
                            <Image
                                src={messageIcon}
                                height="36"
                                width="45"
                                alt="search"
                            />
                            <Image
                                src={notifIcon}
                                height="36"
                                width="45"
                                alt="search"
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-[50px]">
                            <Card customized={true} className="w-[347px] h-[210px] bg-yellow-lm rounded-lg">
                            </Card>
                            <Card customized={true} className="w-[347px] h-[210px] bg-yellow-lm rounded-lg">
                            </Card>
                        </div>
                    </div>
                </SplitContainer>
            </Container>
        </section>
    );
}

export default Dashboard;
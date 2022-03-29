import Container from "../../Components/Container/Container";
import SplitContainer from "./SplitContainer/SplitContainer";
import Card from "../../Components/Card/Card";
import Search from "./Search/Search";
import messageIcon from "/public/messageIcon.svg"
import notifIcon from "/public/notifIcon.svg"
import Image from "next/image";
import StudentInfoList from "./StudentInfoList/StudentInfoList";
import { dashboardData } from "./DashboardData";
import studentAvatar from "/public/studentIcon.svg"

const Dashboard = () => {
    return (
        <section className="overflow-hidden">
            <Container width="w-screen" height="h-screen">
                <SplitContainer>
                    <Card customized={true} className="w-[354px] flex-col gap-[50px] h-[684px] bg-yellow-lm rounded-lg">
                        <div className="h-[76px] w-[76px] flex justify-center items-center mx-auto rounded-full bg-white overflow-hidden">
                            <Image
                                src={studentAvatar}
                                height="46"
                                width="46"
                                alt="Student"
                            />
                        </div>
                        <div className="flex flex-col w-full h-[474px] gap-[40px] items-center"> 
                            {dashboardData.map((props, index) => (
                                    <StudentInfoList {...props} key={index} />
                            ))}
                        </div>
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
                            {[1, 2].map((_, index) => (
                            <Card customized={true} key={index} className="w-[347px] h-[210px] bg-yellow-lm rounded-lg">
                            </Card>
                            ))}
                        </div>
                    </div>
                </SplitContainer>
            </Container>
        </section>
    );
}

export default Dashboard;
import Image from "next/image"
import Link from "next/link"
import Card from "../../../Components/Card/Card"

export interface Props {
    className?: string
    icon: string
    href: string
    label: string
}

const StudentInfoList = ({ className, icon, href, label }: Props) => {
    return (
        <Card customized={true} className="items-center flex-row h-[60px] w-[258px] rounded-md bg-white text-blue-secondary font-medium text-[30px] leading-[45px] gap-1    ">
            <div className="flex justify-center items-center">
                <Image src={icon} height="30" width="30" alt={`${icon}`} />
            </div>
            <div>
                <Link href={href}>
                    <a>{label}</a>
                </Link>
            </div>
        </Card>
    );
}

export default StudentInfoList;
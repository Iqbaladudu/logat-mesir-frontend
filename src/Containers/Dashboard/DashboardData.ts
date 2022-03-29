import {Props as StudentInfoListProps } from "./StudentInfoList/StudentInfoList"
import dashboardIcon from "/public/dashboardIcon.svg"
import classIcon from "/public/myClassIcon.svg"
import teacherIcon from "/public/studentIcon.svg"
import courseIcon from "/public/courseIcon.svg"
import groupChatIcon from "/public/chatGroupIcon.svg"

export const dashboardData: StudentInfoListProps[] = [
    {
        icon: dashboardIcon,
        href: "/user/dashboard",
        label: "Beranda"
    },
    {
        icon: classIcon,
        href: "#",
        label: "Kelas Saya"
    },
    {
        icon: teacherIcon,
        href: "#",
        label: "Instruktur",
    },
    {
        icon: courseIcon,
        href: "#",
        label: "Kursus"
    },
    {
        icon: groupChatIcon,
        href: "#",
        label: "Grup Chat"
    }
]
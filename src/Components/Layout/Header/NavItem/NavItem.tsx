import Link from 'next/link'
import styles from './NavItem.module.css'
import clsx from 'clsx'

type Props = {
    label: string,
    href: string,
    active?: boolean
}

const NavItem = ({ label, href, active }: Props) => {
    return (
        <button className={clsx(styles.button, active && styles.active)}>
            <Link href={href}>
                <a className="text-xl font-label font-bold h-auto w-auto px-2 py-2 rounded-lg">
                    {label}
                </a>
            </Link>
        </button>
    )
}

export default NavItem
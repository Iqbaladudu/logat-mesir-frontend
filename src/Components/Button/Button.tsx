import Link from 'next/link'
import type { MouseEventHandler } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

export type Props = {
    label: string
    secondary?: Boolean
    url?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}

const Button = ({ label, secondary, url = '', onClick, className }: Props) => {
    return onClick ? (
        <button onClick={onClick} className={clsx(styles.button, className, secondary && styles.buttonsecondary)}>
            {label}
        </button>
    ) : (
        <div className={clsx(styles.button, className, secondary && styles.buttonsecondary)}>
            <Link href={url}>
                <a>
                    {label}
                </a>
            </Link>
        </div>
    )
}

export default Button
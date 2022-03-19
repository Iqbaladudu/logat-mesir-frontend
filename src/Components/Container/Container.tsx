import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
    width?: string
    height?: string
}

const Container: React.FC<Props> = ({ children, width = 'max-w-screen-lg', height = '' }) => {
    return (
        <div className={clsx(width, height, 'mx-auto')}>
            {children}
        </div>
    );
}

export default Container;
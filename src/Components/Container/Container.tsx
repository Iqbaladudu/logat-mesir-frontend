import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
    children: ReactNode
    width?: string
    height?: string
    flex?: string
}

const Container: React.FC<Props> = ({ children, width = 'max-w-screen-lg', height = '', flex }) => {
    return (
        <div className={clsx(width, height, flex, 'mx-auto')}>
            {children}
        </div>
    );
}

export default Container;
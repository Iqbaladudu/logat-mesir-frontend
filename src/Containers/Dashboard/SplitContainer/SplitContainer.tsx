import { ReactNode } from "react";
import Container from "../../../Components/Container/Container";

interface Props {
    children: ReactNode | ReactNode[]
}

interface PanelProps {
    children: ReactNode
}

const Panel = ({children} : PanelProps) => {
    return (
        <div className="flex-1 flex w-full h-full justify-center items-center flex-row">
            {children}
        </div>
    )
}

const SplitContainer = ({ children }: Props) => {
    return (
        <Container width="w-full" height="h-full" flex="flex flex-row items-center justify-center">
        {Array.isArray(children) ? (
            children.map((component, index) => (
                <Panel key={index}>
                    {component}
                </Panel>
            ))
        ):(
            <Panel>
                {children}
            </Panel>
        )}
        </Container>
    )
}


export default SplitContainer;
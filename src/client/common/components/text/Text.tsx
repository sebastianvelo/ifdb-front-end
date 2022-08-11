import { FunctionComponent } from "react";

interface TextProps {
    className?: string;
    children?: string | string[];
}

const Text: FunctionComponent<TextProps> = (props: TextProps) => 
     (<p className={`${props.className ?? 'text-justify'} text-dark dark:text-white`}>{props.children}</p>)  // TODO Refactor with props like the others components


export default Text;
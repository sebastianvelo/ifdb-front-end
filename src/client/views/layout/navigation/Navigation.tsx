import { FunctionComponent, useState } from "react";
import NavigationActions, { NavigationActionsProps } from "./actions/NavigationActions";
import NavigationHeader, { NavigationHeaderProps } from "./header/NavigationHeader";

export interface NavigationProps extends NavigationHeaderProps, NavigationActionsProps { }

const Navigation: FunctionComponent<NavigationProps> = (props: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`flex flex-col items-center text-dark`}>
      <NavigationHeader {...props} toggleLinks={() => setIsOpen(!isOpen)} />
      <NavigationActions {...props} isOpen={isOpen} toggleLinks={() => setIsOpen(!isOpen)} />
    </nav>
  );
};

export default Navigation;

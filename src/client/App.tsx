import { FunctionComponent } from "react";
import { useUser } from "reactfire";
import Footer, { FooterProps } from "./views/layout/footer/Footer";
import Main, { MainProps } from "./views/layout/main/Main";
import Navigation, { NavigationProps } from "./views/layout/navigation/Navigation";

export interface AppProps {
  navigation: (user: any) => NavigationProps;
  main: () => MainProps;
  footer: () => FooterProps;
}

const App: FunctionComponent<AppProps> = (props: AppProps) => {
  const user = useUser();

  return (
    <div className={`font-sans max-w-screen overflow-x-hidden bg-gradient-to-b from-secondary-lighter via-light to-secondary-lighter dark:from-secondary-dark dark:via-secondary dark:to-secondary-dark`}>
      <Navigation {...props.navigation(user.data)} />
      <Main {...props.main()} />
      <Footer {...props.footer()} />
    </div>
  );
};

export default App;
import { FunctionComponent } from "react";
import Footer, { FooterProps } from "./views/layout/footer/Footer";
import Main, { MainProps } from "./views/layout/main/Main";
import Navigation, { NavigationProps } from "./views/layout/navigation/Navigation";

export interface AppProps {
  navigation: () => NavigationProps;
  main: () => MainProps;
  footer: () => FooterProps;
 }

const App: FunctionComponent<AppProps> = (props: AppProps) => (
    <div className={`font-sans max-w-screen overflow-x-hidden bg-gradient-to-b from-secondary-lighter via-white to-secondary-lighter dark:from-secondary-dark dark:via-secondary dark:to-secondary-dark`}>
      <Navigation {...props.navigation()} />
      <Main {...props.main()} />
      <Footer {...props.footer()}/>
    </div>
  );

export default App;
import Page from "client/common/page/Page";
import AuthPage, { AuthPageProps } from "client/views/pages/auth/AuthPage";
import PageRoute from "shared/routes/PageRoute";

export const AuthPageBlueprint: Page<AuthPageProps> = {
    route: PageRoute.AUTH,
    component: AuthPage,
    props: {

    }
};
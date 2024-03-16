import {ROUTERS} from "./utils/router"
import HomePage from "./pages/users/homePage"
import ProfilePage from "./pages/users/profilePage"
import LoginPage from "./pages/users/loginPage"
import RegisterPage from "./pages/users/registerPage"
import IntroPage from "./pages/users/introPage"
import {Routes, Route } from "react-router-dom"
import MasterLayout from "./pages/users/theme/masterLayout"
import PaperPage from "./pages/users/paperPage"
import ProductPage from "./pages/users/productPage"
import ContactPage from "./pages/users/contactPage"
import AuthenticationPage from "./pages/users/authenticationPage"

const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.LOGIN,
            component: <AuthenticationPage />
        },
        {
            path: ROUTERS.USER.REGISTER,
            component: <RegisterPage />
        },
        {
            path: ROUTERS.USER.INTRODUCE,
            component: <IntroPage />
        },
        {
            path: ROUTERS.USER.PAPER,
            component: <PaperPage />
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductPage />
        },
        {
            path: ROUTERS.USER.CONTACT,
            component: <ContactPage />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => ( 
                <Route key={key} path={item.path} element={item.component}/>
                ))
                }
            </Routes>
        </MasterLayout>
    )
}

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;
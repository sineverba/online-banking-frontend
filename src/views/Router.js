import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import DashboardPage from "./DashboardPage/DashboardPage";
import { PATH_DASHBOARD, PATH_HOME } from "../utils/constants/constant";
import AuthRouter from "./AuthRouter";

export const Router = () => {
    return (
        <Routes>
            <Route path={PATH_HOME} element={<AuthRouter type="guest"><HomePage /></AuthRouter>} />
            <Route path={PATH_DASHBOARD} element={<AuthRouter type="private"><DashboardPage /></AuthRouter>} />
        </Routes>
    );
}

export default Router;
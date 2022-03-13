import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import DashboardPage from "./DashboardPage/DashboardPage";
import BankAccountTransactionsPage from "./BankAccountTransactionsPage/BankAccountTransactionsPage";
import { PATH_BANK_ACCOUNT_TRANSACTIONS, PATH_DASHBOARD, PATH_HOME } from "../utils/constants/constant";
import AuthRouter from "./AuthRouter";

export const Router = () => {
    return (
        <Routes>
            <Route path={PATH_HOME} element={<AuthRouter type="guest"><HomePage /></AuthRouter>} />
            <Route path={PATH_DASHBOARD} element={<AuthRouter type="private"><DashboardPage /></AuthRouter>} />
            <Route path={PATH_BANK_ACCOUNT_TRANSACTIONS} element={<AuthRouter type="private"><BankAccountTransactionsPage /></AuthRouter>} />
        </Routes>
    );
}

export default Router;
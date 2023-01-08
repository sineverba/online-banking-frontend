import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  PATH_DASHBOARD,
  PATH_HOME,
  TYPE_GUEST,
  TYPE_PRIVATE
} from "./utils/constants/constant";
import { LoginPage } from "./views/LoginPage/LoginPage";
import { DashboardPage } from "./views/DashboardPage/DashboardPage";
import { AuthRouter } from "./components/AuthRouter";

export function Router() {
  return (
    <Routes>
      <Route
        path={PATH_HOME}
        element={(
          <AuthRouter type={TYPE_GUEST}>
            <LoginPage />
          </AuthRouter>
        )}
      />
      <Route
        path={PATH_DASHBOARD}
        element={(
          <AuthRouter type={TYPE_PRIVATE}>
            <DashboardPage />
          </AuthRouter>
        )}
      />
    </Routes>
  );
}

export default Router;

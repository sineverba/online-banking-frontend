import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ENTITY_TRANSACTIONS,
  PATH_DASHBOARD,
  PATH_HOME,
  PATH_TRANSACTIONS,
  TYPE_GUEST,
  TYPE_PRIVATE
} from "./utils/constants/constant";
import { LoginPage } from "./views/LoginPage/LoginPage";
import { DashboardPage } from "./views/DashboardPage/DashboardPage";
import { AuthRouter } from "./components/AuthRouter";
import { GenericPage } from "./views/GenericPage/GenericPage";

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
      <Route
        path={PATH_TRANSACTIONS}
        element={(
          <AuthRouter type={TYPE_PRIVATE}>
            <GenericPage entity={ENTITY_TRANSACTIONS} />
          </AuthRouter>
        )}
      />
    </Routes>
  );
}

export default Router;

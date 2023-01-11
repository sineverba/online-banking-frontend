import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  LOGIN_SHARED_KEY,
  PATH_DASHBOARD, PATH_HOME, TYPE_GUEST, TYPE_PRIVATE
} from "../utils/constants/constant";

export function AuthRouter(props) {
  // Destructure the props
  const { children, type } = props;
  // Get the access token
  const accessToken = useSelector((state) => state.apiSlice.mutations[LOGIN_SHARED_KEY]?.data?.access_token ?? null);
  /**
     * If route need to be NOT AUTHENTICATED and we have the access token
     * REDIRECT TO dashboard (login page)
     */
  if (type === TYPE_GUEST && accessToken) {
    return <Navigate to={PATH_DASHBOARD} />;
  }
  /**
     * If route need to be AUTHENTICATED and accessToken is missing
     * REDIRECT to login
     */
  if (type === TYPE_PRIVATE && !accessToken) {
    return <Navigate to={PATH_HOME} />;
  }
  return children;
}

export default AuthRouter;

import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { PATH_DASHBOARD, PATH_HOME } from "../utils/constants/constant";

export const AuthRouter = ({children, type, accessToken}) => {
    if (type === "private" && !accessToken) {
        return <Navigate to={PATH_HOME} />;
    }
    if (type === "guest" && accessToken) {
        return <Navigate to={PATH_DASHBOARD} />;
    }
    return children;
}

const mapStateToProps = (state) => ({
    accessToken: state.login.accessToken
  })
  
  export default connect(mapStateToProps,null,)(AuthRouter);
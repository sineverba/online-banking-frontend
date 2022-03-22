import { connect } from "react-redux";
import Router from "./Router";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

function App({accessToken}) {

    const getClassName = () => {
        let className = "d-flex flex-column";
        if (!accessToken) {
            className = `${className} with-background`;
        }
        return className;
    }

    return (
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className={getClassName()}>
                <div id="content">
                    <Topbar />
                    <Router />
                </div>
                <Footer />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    accessToken: state.login.accessToken
});

export default connect(mapStateToProps, null,)(App);
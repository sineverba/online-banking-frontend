import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { PATH_HOME, PATH_DASHBOARD, PATH_BANK_ACCOUNT_TRANSACTIONS } from "../../utils/constants/constant"

export const Sidebar = (props) => {

    const toggleSidebar = () => {
        return props.isNavbarClosed ? 'd-none' : 'd-block';
    }

    return (
        props.accessToken ?
        <div className={`sidebar sidebar-dark accordion bg-primary ${toggleSidebar()}`}>
            <Navbar.Brand>
                <LinkContainer to={PATH_HOME}>
                    <Nav.Link>
                        <span className="d-lg-block d-none">{process.env.REACT_APP_NAME}</span>
                    </Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <hr className="sidebar-divider"></hr>
            <ul>
                <li>
                    <LinkContainer to={PATH_DASHBOARD}>
                        <Nav.Link><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Nav.Link>
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to={PATH_BANK_ACCOUNT_TRANSACTIONS}>
                        <Nav.Link><FontAwesomeIcon icon={faEuroSign} /> Bank Account Transactions</Nav.Link>
                    </LinkContainer>
                </li>
            </ul>
        </div>
        : null
    );
}

const mapStateToProps = state => {
    return {
        isNavbarClosed: state.layout.isNavbarClosed,
        accessToken: state.login.accessToken
    }
};

export default connect(mapStateToProps, null)(Sidebar);
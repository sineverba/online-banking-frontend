import { Button, Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import { actions as layoutActions } from "../../actions/app/LayoutActions";
import { actions as loginActions } from "../../actions/app/LoginActions";
import { connect } from "react-redux";

export const Topbar = (props) => {

    const handleClick = () => {
        props.toggleNavbar();
    }
    const handleClickLogout = () => {
        props.logout();
    }

    return (
        props.accessToken ?
        <Navbar bg="light" variant="light" id="topbar">
            <Container fluid>
                <Button variant="link" onClick={handleClick}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <div className="d-flex justify-content-end">
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                John Doe <FontAwesomeIcon icon={faUser} />
                            </Dropdown.Toggle>

                            <Dropdown.Menu id="user-menu">
                                <Dropdown.Item onClick={handleClickLogout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </div>
            </Container>
        </Navbar>
        : null
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNavbar: () => dispatch(layoutActions.toggleNavbar()),
        logout: () => dispatch(loginActions.logout())
    }
}

const mapStateToProps = state => {
    return {
        accessToken: state.login.accessToken
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
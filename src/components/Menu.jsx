import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  PATH_DASHBOARD,
  PATH_HOME,
  PATH_PAYMENTS,
  PATH_TRANSACTIONS
} from "../utils/constants/constant";

export function Menu() {
  return (
    <>
      <Navbar.Brand>
        <LinkContainer activeClassName="active" to={PATH_HOME}>
          <Nav.Link>
            <span className="d-lg-block d-none">
              {process.env.REACT_APP_NAME}
            </span>
          </Nav.Link>
        </LinkContainer>
      </Navbar.Brand>
      <hr className="menu-divider" />
      <ul>
        <li>
          <LinkContainer activeClassName="active" to={PATH_DASHBOARD}>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer activeClassName="active" to={PATH_TRANSACTIONS}>
            <Nav.Link>Transactions</Nav.Link>
          </LinkContainer>
        </li>
        <li>
          <LinkContainer activeClassName="active" to={PATH_PAYMENTS}>
            <Nav.Link>Payments</Nav.Link>
          </LinkContainer>
        </li>
      </ul>
    </>
  );
}

export default Menu;
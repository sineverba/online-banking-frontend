import React from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";

export function Topbar() {
  return (
    <Navbar variant="light" id="topbar">
      <Container fluid>
        <div className="d-flex justify-content-end">
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <span>info@example.com</span>
              </Dropdown.Toggle>
              <Dropdown.Menu id="user-menu">
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Topbar;

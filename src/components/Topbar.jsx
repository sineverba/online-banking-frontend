import React from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { apiSlice } from "../features/apiSlice";

export function Topbar() {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Reset the loginSlice
    dispatch(apiSlice.util.resetApiState());
  };

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
                <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

export default Topbar;

import React, { useState } from "react";
import { Container, Navbar, Nav, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import QRCode from "react-qr-code";
import { apiSlice } from "../features/apiSlice";
import { ModalWindow } from "./ModalWindow";

export const Topbar = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleModalClick = () => {
    setShow(true);
  };

  const handleClick = () => {
    // Reset the loginSlice
    dispatch(apiSlice.util.resetApiState());
  };

  return (
    <>
      <Navbar variant="light" id="topbar">
        <Container fluid>
          <div className="d-flex justify-content-end">
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                  <span>info@example.com</span>
                </Dropdown.Toggle>
                <Dropdown.Menu id="user-menu">
                  <Dropdown.Item onClick={handleModalClick}>
                    Enable MFA
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
      <ModalWindow show={show} handleHide={setShow}>
        <QRCode
          value="otpauth://totp/BitBank%20POC?secret=XAHQH7KI4PMFGVA2&issuer=sineverba"
        />
      </ModalWindow>
    </>
  );
};

export default Topbar;

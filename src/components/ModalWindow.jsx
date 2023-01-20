import React from "react";
import { Button, Modal, ModalBody } from "react-bootstrap";

export function ModalWindow(props) {
  const { show, handleHide, children } = props;
  return (
    <Modal show={show}>
      <Modal.Header closeButton onHide={() => handleHide(false)}>
        <Modal.Title>Detail</Modal.Title>
      </Modal.Header>
      <ModalBody>{children}</ModalBody>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleHide(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;

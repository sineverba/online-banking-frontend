import { Button, Modal, Tab, Tabs } from "react-bootstrap";

export const ModalPopup = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Tabs defaultActiveKey="detail">
                    {
                        props.tabs && props.tabs.map((item, index) => {
                            return (
                                <Tab eventKey={item.tabEventKey} title={item.tabTitle} key={index}>
                                    {item.children}
                                </Tab>
                            )
                        })
                    }
                </Tabs>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHandleClick}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalPopup;
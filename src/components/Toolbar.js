import { Button, ButtonGroup } from "react-bootstrap";

export const Toolbar = ({ data }) => {
    return (
        <ButtonGroup aria-label="Toolbar">
            {
                data.map((item, index) => {
                    return (<Button
                        key={index}
                        onClick={item.handleProp}
                        id={item.value}>{item.icon}
                    </Button>);
                })
            }
        </ButtonGroup>
    );
}

export default Toolbar;
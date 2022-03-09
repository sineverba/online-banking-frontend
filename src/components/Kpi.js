import { Card } from "react-bootstrap";

export const Kpi = (props) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.value}</Card.Text>
                {props.icon}
            </Card.Body>
        </Card>
    );
}

export default Kpi;
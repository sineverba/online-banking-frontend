import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions as bankAccountTransactionsActions } from "../../actions/app/BankAccountTransactionsActions";

export const Payments = (props) => {

    const [amount, setAmount] = useState(null);
    const [purpose, setPurpose] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();
        if (amount && purpose && amount !== "" && purpose !== "") {
            const payload = {
                amount: -amount,
                purpose: purpose,
            };
            props.post(payload);
        }
    }

    const handleChange = (e) => {
        if (e.target.id === 'amount') {
            setAmount(e.target.value);
        }
        if (e.target.id === 'purpose') {
            setPurpose(e.target.value);
        }
    }

    return (
        <Form>
            <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control type="text" placeholder="Enter amount" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="purpose">
                <Form.Label>Purpose</Form.Label>
                <Form.Control type="text" placeholder="purpose" onChange={handleChange} />
            </Form.Group>
            <div className="d-grid">
                <Button variant="success" type="submit" onClick={handleClick}>
                    Send payment
                </Button>
            </div>
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        post: (payload) => dispatch(bankAccountTransactionsActions.post(payload))
    }
}

export default connect(null, mapDispatchToProps)(Payments);
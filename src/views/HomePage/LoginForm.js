import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions as loginActions } from "../../actions/app/LoginActions";

export const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        if (username !== "" && password !== "") {
            const payload = {
                username: username,
                password: password,
            };
            props.post(payload);
        }
    }

    const handleChange = (e) => {
        if (e.target.id === 'username') {
            setUsername(e.target.value);
        }
        if (e.target.id === 'password') {
            setPassword(e.target.value);
        }

    }

    return (
        <Form className="form-login">
            <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
            </Button>
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        post: (payload) => dispatch(loginActions.post(payload))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);
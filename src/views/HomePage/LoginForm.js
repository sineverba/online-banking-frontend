import { useState } from "react";
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
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
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} sm={6} lg="auto">
                    <h1>Welcome to BitBank!</h1>
                    <p>Please login with your data</p>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                    <Form className="form-login">
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" size="lg" onClick={handleClick}>
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        post: (payload) => dispatch(loginActions.post(payload))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);
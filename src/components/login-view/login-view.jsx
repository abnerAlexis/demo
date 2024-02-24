import React, { useState} from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
 
export const LoginView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        // this prevents the default behavior of the form which is to reload the entire page
        event.preventDefault();

        const data = {
            access: username,
            secret: password
        }

        fetch("https://openlibrary.org/account/login.json", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                dispatch(setUser(username));
            } else {
                alert("Login Failed.");
            }
        })
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="John Doe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    minLength={3}
                    required
            />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Button
                    variant="primary"
                    type="submit">
                        Submit
                </Button>
        </Form>
    );
}
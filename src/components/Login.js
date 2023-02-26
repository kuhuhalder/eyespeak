import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
/**
 * Login component to update a user's password in case they forget their password.
 * @param {*} props
 * @returns React component
 */
export default function Login(props) {
  const navigate = useNavigate();
  const [wrong, setWrong] = useState(false);
  const [userName, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      method: "get",
      url:
        "http://localhost:8080/api/students/validate/" +
        userName +
        "/" +
        password,
    };

    axios(configuration)
      .then((result) => {
      
          setLogin(true);
            navigate("/viewaccount", { state: { userName: userName } });
      })
      .catch((error) => {
        setWrong(true);
        error = new Error();
      });
  };


  return (
    <div>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={userName}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label required>Password</Form.Label>
          <Form.Control
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
      Don't have an account? You can create an account{" "}
      <Link to="/register">here</Link> instead!
    </div>
  );
}

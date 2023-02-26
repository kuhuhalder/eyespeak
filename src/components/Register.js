import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Account from "./Account";
/**
 * RegisterAdmin component is to register/ create a new account for an admin.
 * @param {*} props
 * @returns React component
 */
export default function RegisterAdmin(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState(false);
  const [accExists, setAccExists] = useState(false);
  // handleRegister function is to call the add API to create an account for admin
  const handleRegister = (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "https://us-central1-sylvan-terra-379003.cloudfunctions.net/webApi/api/users",
      data: {
        email,
        firstName,
        lastName,
        password,
      },
    };
    console.log(configuration);
    axios(configuration)
      .then((result) => {
        setRegister(true);
        navigate("/account", { state: { firstName:firstName, lastName:lastName } });

      })
      .catch((error) => {
        error = new Error();
        setAccExists(true);
      });
  };

  return (
    <div>
      <h2>Create an Account</h2>
      <Form onSubmit={(e) => handleRegister(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter last name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
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
          onClick={(e) => handleRegister(e)}
        >
          Register
        </Button>
      </Form>
      <br></br>
      <Link to="/login">
        Already have an account? Click here to login!
      </Link>
    </div>
  );
}

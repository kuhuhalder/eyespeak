import axios from "axios";
import React, { useState } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
// import NavBar from "../components/NavBar";
import "../css/Account.css";
/**
 * Account component to display the current logged in user's information.
 * @param {*} props
 * @returns React component
 */
const Account = (props) => {
  // const location = useLocation();
  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState(location.state.firstName);
  // const [lastName, setLastName] = useState(location.state.lastName);
  // const [email, setEmail] = useState(location.state.email);  
  return (
    <Container>
      <Row>
        {/* <NavBar></NavBar> */}
      </Row>
      <Col>
        <h1>
          {/* Welcome {firstName} {lastName}! */}
        </h1>

        <Button
          variant="primary"
          type="submit"
          onClick={navigate("/buddies")}
        >
          Find Buddies
        </Button>

        <Button
          variant="primary"
          type="submit"
          onClick={navigate("/audio-page")}
        >
          Summarize PDF
        </Button>

        <Button
          variant="primary"
          type="submit"
          onClick={navigate("/pdf-page")}
        >
          Summarize Audio
        </Button>
        <p> (can include zoom videos)</p>
        
       
      </Col>
    </Container>
  );
};
export default Account;

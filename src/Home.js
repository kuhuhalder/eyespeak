import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./css/Home.css";
/**
 * Home component to display the home page.
 * @param {*} props
 * @returns React component
 */
const Home = (props) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Button
          variant="custom"
          type="submit"
          onClick={() => {
            navigate("/register");
          }}
        >
Register        </Button>
      </Row>
      <Row>
        <Col>
          </Col>
      </Row>
    </Container>
  );
};
export default Home;

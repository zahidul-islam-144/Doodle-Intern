import React from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import AddStudents from "../AddStudents/AddStudents";
import Students from "../Students/Students";
const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row gap="5">
          <h1 className="text-center text-white rounded-bottom mb-3 p-3  bg-primary">
            React Node Mongo CRUD
          </h1>

          <Col xl={4} lg={4} sm={12} xs={12}>
            <AddStudents></AddStudents>
          </Col>

          <Col xl={8} lg={8} sm={12} xs={12} >
            <Students></Students>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;

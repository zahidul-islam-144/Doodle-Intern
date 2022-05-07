import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";

const Update = () => {
  const { id } = useParams();
  const [updateStudent, setUpdateStudent] = useState({});

  useEffect(() => {
    const url = `http://localhost:8008/students/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateStudent(data));
  }, [id]);

  // Update Student Data
  const handleNameChange = (e) => {
    const changeName = e.target.value;
    console.log(changeName);
    const updatedStudentData = { name: changeName, email: updateStudent.email };
    setUpdateStudent(updatedStudentData);
    console.log(updatedStudentData);
  };

  const handleEmailChange = (e) => {
    const changeEmail = e.target.value;
    console.log(changeEmail);
    const updatedStudentData = { name: updateStudent.name, email: changeEmail };
    setUpdateStudent(updatedStudentData);
    console.log(updatedStudentData);

    // const updatedStudentData = {...updateStudent};
    // updatedStudentData.email = changeEmail;
  };

  // saving changed name and email into the database
  const handleUpdateStudentForm = (e) => {
    const url = `http://localhost:8008/students/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setUpdateStudent({});
          // e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <>
      <h3 className="m-3 p-2 text-center text-white bg-primary rounded-3">
        Update Student
      </h3>

      <Row className="justify-content-md-center">
        {/* <h5 className="text-center text-warning">Previous Student Name: {previousName} & Email: {previousEmail}</h5> */}
        <h5 className="text-center text-danger">
          Updating Student Name: {updateStudent.name} & Email:{" "}
          {updateStudent.email}
        </h5>
        <Col lg={4} md={4} sm={12} xs={12}>
          <Form className="m-2">
            <Form.Label>Write Student Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleNameChange}
              placeholder="write student's name"
            />

            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={handleEmailChange}
              placeholder="write email"
            />
            <div className="d-flex justify-content-around mt-4">
              <span>
                <Button onClick={handleUpdateStudentForm}>Updated</Button>
              </span>
              <span>
                <Link to="/home">
                  <Button>Back to Home</Button>
                </Link>
              </span>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Update;

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddStudents = () => {
  // store data in states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // input field for name & email
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // submitting the from after taking input data
  const handleForm = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    const newStudent = { name: name, email: email };

    fetch("http://localhost:8008/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newStudent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Student added successfully...");
          e.target.reset();
        }
      });
  };

  return (
    <>
      <h3 className="m-3 p-2 text-center text-white bg-primary rounded-3">
        Add Students
      </h3>
      <Form>
        <Form.Label>Write Student Name</Form.Label>
        <Form.Control
          type="text"
          onBlur={handleName}
          placeholder="write student's name"
          required
        />

        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          onBlur={handleEmail}
          placeholder="write email"
          required
        />
        <Button className="mt-3 d-block position" onClick={handleForm}>
          Add Student
        </Button>
      </Form>
    </>
  );
};

export default AddStudents;

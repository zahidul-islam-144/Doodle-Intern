import React, { useEffect, useState } from "react";
import "./Students.css";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  // console.log(students);

  useEffect(() => {
    fetch("http://localhost:8008/students/all-students")
      .then((res) => res.json())
      .then((data) => setStudents(data.allStudents));
  }, []);

  // DELETE AN USER
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:8008/students/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            window.alert("deleted successfully");
            const remainingStudents = students.filter((user) => user.id !== id);
            setStudents(remainingStudents);
          }
        });
    }
  };

  return (
    <>
      <h3 className="m-3 p-2 text-center text-white bg-primary rounded-3">
        Show Students : {students.length}
      </h3>
      <table className="table tbody-height">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>

                <td className="action">
                  <span className="action-btn">
                    <Link to={`/update/${student.id}`}>
                      <Button variant="warning" size="sm">
                        See Details
                      </Button>
                    </Link>
                  </span>
                  <span className="action-btn">
                    <Link to={`/update/${student.id}`}>
                      <Button variant="warning" size="sm">
                        Update
                      </Button>
                    </Link>
                  </span>
                  <span className="action-btn">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDeleteUser(student.id)}
                    >
                      Delete
                    </Button>
                  </span>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Students;

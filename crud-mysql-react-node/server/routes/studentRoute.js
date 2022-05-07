const express = require("express");
const studentRouter = express.Router();
const { createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent } = require("../controllers/studentController");

// productRouter.route("/create-product").post(createProduct);
studentRouter.post("/create-student", createStudent);
studentRouter.get("/all-students", getAllStudents);
studentRouter.get("/single-student/:id", getSingleStudent);
studentRouter.put("/update-student/:id", updateStudent);
studentRouter.delete("/delete-student/:id", deleteStudent);


/* 
--------------- student routes connection checking ---------------
*/
studentRouter.get("/student-router", (req, res) => {
  res.json({
    success: true,
    message: "Connected to student routes successfully....",
  });
});

module.exports = studentRouter;

const db = require("../models/rootModel");

// create main moedl
const Student = db.students;

//CREATE------>
exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = await Student.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student created successfully...",
      newStudent,
    });
    console.log("Added Student: ", newStudent);
  } catch (error) {
    console.log("An error occured at studentController: ", error);
  }
};

//GET ALL STUDENTS------>
exports.getAllStudents = async (req, res, next) => {
  try {
    const allStudents = await Student.findAll({});
    res.status(201).json({
      success: true,
      message: "Fetched all students successfully...",
      allStudents,
    });
  } catch (error) {
    console.log("An error occured at studentController: ", error);
  }
};

//GET SINGLE STUDENT------>
exports.getSingleStudent = async (req, res, next) => {
  try {
    const studentId = req.params.id; // target a specific student by its id whom you want to find
    console.log(studentId);

    const singleStudent = await Student.findOne({ where: { id: studentId } });
    console.log(singleStudent);

    if (!singleStudent) {
      res.status(404).json({
        success: false,
        message: "Student not found !",
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Student found successfully !",
        singleStudent,
      });
    }
  } catch (error) {
    console.log("An error occured at studentController: ", error);
  }
};

//UPDATE SINGLE STUDENT------>
exports.updateStudent = async (req, res, next) => {
  try {
    const studentId = req.params.id;
    console.log(studentId);

    const updateStudent = await Student.update(req.body, {
      where: { id: studentId },
    });
    console.log(updateStudent);
    if (!updateStudent) {
      res.status(404).json({
        success: false,
        message: "Student not found !",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Student updated successfully !",
        updateStudent,
      });
    }
  } catch (error) {
    console.log("An error occured at studentController: ", error);
  }
};

// DELETE A STUDENT------>
exports.deleteStudent = async (req, res, next) => {
  try {
    const studentId = req.params.id; // target a specific student by its id whom you want to find
    console.log(studentId);

    const deletedStudent = await Student.destroy({ where: { id: studentId } });
    console.log(deletedStudent);

    if (!deletedStudent) {
      res.status(404).json({
        success: false,
        message: "Student not found !",
      });
    } else {
      res.status(201).json({
        success: true,
        message: "Student deleted successfully !",
      });
    }
  } catch (error) {
    console.log("An error occured at studentController: ", error);
  }
};

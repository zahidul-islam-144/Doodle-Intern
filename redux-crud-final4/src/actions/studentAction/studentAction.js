import axios from "axios";
import * as types from "../../constants/actionTypes";
import { fetchAllStudentThunk } from "../../thunk/studentThunk";
import { urlStuffs } from "../../utilities/reuseStuffs";

// student adding actions
export const addStudentRequest = () => ({
  type: types.STUDENT_ADD_REQUEST,
});

export const addStudentSuccess = (data) => ({
  type: types.STUDENT_ADD_SUCCESS,
  payload: {
    newStudentData: data,
    success: "Student added successfully !",
  },
});

export const addStudentFailure = (error) => ({
  type: types.STUDENT_ADD_FAILURE,
  payload: {
    error: error,
  },
});

//student fetching action
export const fetchAllStudentsRequest = () => ({
  type: types.GET_ALL_STUDENTS_REQUEST,
  payload: {
    message: "Request in progress...",
  },
});

export const fetchAllStudentsSuccess = (data) => ({
  type: types.GET_ALL_STUDENTS_SUCCESS,
  payload: {
    studentData: data,
    message: "Data fetched successfully."
  }
});

export const fetchAllStudentsFailure = (error) => ({
  type: types.GET_ALL_STUDENTS_FAILURE,
  payload: {
    error: error,
  },
});

// action creation functions ends

// =======================================>

// DISPATCH created Actions start: 
// export const createStudent = (data) => async (dispatch) => {
//   console.log("action: ", data);
//   try {
//     dispatch(addStudentRequest());

//     const { responseData } = await axios.post(urlStuffs.addStudentURL, data, {
//       headers: { "Content-Type": "application/json" },
//     });
//     console.log("addUrl", urlStuffs.addStudentURL);
//     dispatch(addStudentSuccess(responseData));
//   } catch (error) {
//     console.log(error);
//     dispatch(addStudentFailure(error.message));
//   }
// };

// MAIN Action to fetch

export const fetchAllStudent = () => (dispatch) => {
  try {
    dispatch(fetchAllStudentsRequest());
    // const { data } = await axios.get(urlStuffs.fetchAllStudentsURL);
    // console.log("data-from-Action=>", data);
    fetchAllStudentThunk(dispatch);
  } catch (error) {
    console.log(error);
    dispatch(fetchAllStudentsFailure())
  }
};




























// export const fetchAllStudent = () => async (dispatch) => {
//   try {
//     dispatch(getAllStudentsRequest());
//     const { data } = await axios.get(urlStuffs.getStudentsURL);
//     console.log("data-from-Action=>", data);

//     dispatch({
//       type: types.GET_ALL_STUDENTS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: types.GET_ALL_STUDENTS_FAILURE,
//       payload: {
//         error: error,
//       },
//     })
//   }
// };

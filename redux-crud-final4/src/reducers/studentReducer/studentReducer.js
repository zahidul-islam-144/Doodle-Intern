import {
  STUDENT_ADD_FAILURE,
  STUDENT_ADD_REQUEST,
  STUDENT_ADD_SUCCESS,
  GET_ALL_STUDENTS_SUCCESS,
  GET_ALL_STUDENTS_REQUEST,
  GET_ALL_STUDENTS_FAILURE,
} from "../../constants/actionTypes";

const INITIAL_STATE = {
  myData: [],
  loading: true,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case STUDENT_ADD_REQUEST:
      return {
        ...state,
        myData: [],
        loading: true,
      };

    case STUDENT_ADD_SUCCESS:
      return {
        ...state,
        myData: [
          ...state.myData, 
          ...action.payload.newStudentData
        ],
        success: action.payload.success,
        loading: false,
      };

    case STUDENT_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case GET_ALL_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        message: action.payload.message,
      };

    case GET_ALL_STUDENTS_SUCCESS:
      return {
        ...state,
        myData: action.payload.studentData,
        loading: false,
        message: action.payload.message
      };

    case GET_ALL_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: action.payload.error,
      };

    default:
      return state;
  }
};

export default studentReducer;

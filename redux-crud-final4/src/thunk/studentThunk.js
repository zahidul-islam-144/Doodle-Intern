import { urlStuffs } from "../utilities/reuseStuffs";
import { fetchAllStudentsSuccess } from "../actions/studentAction/studentAction";

export const fetchAllStudentThunk = async (dispatch) => {
    const data =  await fetch(urlStuffs.fetchAllStudentsURL);
    const jsonParsed = await data.json();
    dispatch(fetchAllStudentsSuccess(jsonParsed));
}
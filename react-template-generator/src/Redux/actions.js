import { useDispatch } from "react-redux";

const CHANGE_PLATFORM = "CHANGE_PLATFORM";
const MENU_OPEN_CLOSE = "MENU_OPEN_CLOSE";
const CHANGE_SECTION = "CHANGE_SECTION";
const FETCH_API_KEY = "FETCH_API_KEY";
const FETCH_GITHUB_DATA = "FETCH_GITHUB_DATA";
const CHANGE_FILE_CONTENT = "CHANGE_FILE_CONTENT";
export const fetchApiKey = () => {
  return async (dispatch) => {
    const url = "https://express-template-backend.onrender.com/get-api-token";
    fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch({ type: FETCH_API_KEY, payload: data.key }));
  };
};

export {
  CHANGE_PLATFORM,
  MENU_OPEN_CLOSE,
  CHANGE_SECTION,
  FETCH_API_KEY,
  FETCH_GITHUB_DATA,
  CHANGE_FILE_CONTENT,
};

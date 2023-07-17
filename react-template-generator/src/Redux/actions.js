const CHANGE_PLATFORM = "CHANGE_PLATFORM";
const MENU_OPEN_CLOSE = "MENU_OPEN_CLOSE";
const CHANGE_SECTION = "CHANGE_SECTION";
const FETCH_API_KEY = "FETCH_API_KEY";
const FETCH_GITHUB_DATA = "FETCH_GITHUB_DATA";
const CHANGE_FILE_CONTENT = "CHANGE_FILE_CONTENT";
const WELCOME_PAGE_ONCHANGE = "WELCOME_PAGE_ONCHANGE";
const WELCOME_SAVE = "WELCOME_SAVE";
const TRY_IT_SAVE = "TRY_IT_SAVE";
const NEXT_STEPS_SAVE = "NEXT_STEPS_SAVE";
const WELCOME_VIEW = "WELCOME_VIEW";
const TRY_IT_VIEW = "TRY_IT_VIEW";
const NEXT_STEPS_VIEW = "NEXT_STEPS_VIEW";
const WELCOME_EDIT = "WELCOME_EDIT";

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
  WELCOME_PAGE_ONCHANGE,
  WELCOME_SAVE,
  TRY_IT_SAVE,
  NEXT_STEPS_SAVE,
  WELCOME_VIEW,
  TRY_IT_VIEW,
  NEXT_STEPS_VIEW,
  WELCOME_EDIT,
};

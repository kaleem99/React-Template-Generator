import { WELCOME_SAVE, WELCOME_VIEW, WELCOME_EDIT } from "../actions";
import welcomePageComp from "../../Components/SectionsComponents/WelcomePageComp";

const initialSTATE = { result: "", message: "", view: false };
export const saveAndViewReducer = (state = initialSTATE, action) => {
  let result = "";
  switch (action.type) {
    case WELCOME_SAVE:
      const { input1, input2, input3 } = action.payload;
      console.log(input1, input2, input3);
      if (input1 && input2 && input3) {
        result = welcomePageComp(action.payload);
        localStorage.setItem(WELCOME_SAVE, result);
        state.message = "File content saved";
        console.log(result);
      }
      return { ...state };
    case WELCOME_VIEW:
      result = localStorage.getItem(WELCOME_SAVE);
      state.result = result;
      state.view = true;
      console.log(result);
      return { ...state };
    case WELCOME_EDIT:
      state.view = false;
      return { ...state };
    default:
      return state;
  }
};

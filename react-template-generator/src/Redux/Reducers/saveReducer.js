import {
  WELCOME_SAVE,
  WELCOME_VIEW,
  WELCOME_EDIT,
  TRY_IT_EDIT,
  TRY_IT_SAVE,
  TRY_IT_VIEW,
  NEXT_STEPS_SAVE,
  NEXT_STEPS_EDIT,
  NEXT_STEPS_VIEW,
} from "../actions";
import welcomePageComp from "../../Components/SectionsComponents/WelcomePageComp";
import tryItContentComp from "../../Components/SectionsComponents/TryItContentComp";
import nextStepsComp from "../../Components/SectionsComponents/NextStepsComp";
const initialSTATE = { result: "", message: "", view: false };
export const saveAndViewReducer = (state = initialSTATE, action) => {
  let result = "";
  console.log(action.type);
  switch (action.type) {
    // Welcome Page
    case WELCOME_SAVE:
      const { input1, input2, input3 } = action.payload;
      if (input1 && input2 && input3) {
        result = welcomePageComp(action.payload);
        localStorage.setItem(WELCOME_SAVE, result);
        state.message = "File content saved";
      }
      return { ...state };
    case WELCOME_VIEW:
      result = localStorage.getItem(WELCOME_SAVE);
      state.result = result;
      state.view = true;
      return { ...state };
    case WELCOME_EDIT:
      state.view = false;
      return { ...state };
    // Try It Page
    case TRY_IT_SAVE:
      console.log(action.payload);
      result = tryItContentComp(action.payload.content);
      localStorage.setItem(TRY_IT_SAVE, result);
      state.message = "File content saved";
      return { ...state };
    case TRY_IT_VIEW:
      result = localStorage.getItem(TRY_IT_SAVE);
      state.result = result;
      state.view = true;
      return { ...state };
    case TRY_IT_EDIT:
      state.view = false;
      return { ...state };
    // Next Steps Page
    case NEXT_STEPS_SAVE:
      console.log(action.payload);
      result = nextStepsComp(action.payload.content);
      localStorage.setItem(NEXT_STEPS_SAVE, result);
      state.message = "File content saved";
      return { ...state };
    default:
      return state;
  }
};

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
  CHANGE_VIEW_TO_FALSE,
} from "../actions";
import welcomePageComp from "../../Components/SectionsComponents/WelcomePageComp";
import tryItContentComp from "../../Components/SectionsComponents/TryItContentComp";
import nextStepsComp from "../../Components/SectionsComponents/NextStepsComp";
const initialSTATE = { result: "", message: "", view: false };

const saveTemplates = () => {
  let element = document.getElementById("TextCopied");
  element.style.display = "block";
  setTimeout(() => {
    element.style.display = "none";
  }, 2000);
};
export const saveAndViewReducer = (state = initialSTATE, action) => {
  let result = "";
  switch (action.type) {
    case WELCOME_SAVE:
      const { input1, input2, input3 } = action.payload;
      if (input1 && input2 && input3) {
        saveTemplates();
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
    case TRY_IT_SAVE:
      saveTemplates();
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
    case NEXT_STEPS_SAVE:
      const payloadKeys = Object.keys(action.payload);
      if (
        payloadKeys.length === 4 &&
        payloadKeys.every((key) => action.payload[key])
      ) {
        saveTemplates();
        result = nextStepsComp(action.payload);
        localStorage.setItem(NEXT_STEPS_SAVE, result);
        state.message = "File content saved";
      }
      return { ...state };
    case NEXT_STEPS_VIEW:
      result = localStorage.getItem(NEXT_STEPS_SAVE);
      state.result = result;
      state.view = true;
      return { ...state };
    case NEXT_STEPS_EDIT:
      state.view = false;
      return { ...state };
    case CHANGE_VIEW_TO_FALSE:
      state.view = false;
      return { ...state };
    default:
      return state;
  }
};

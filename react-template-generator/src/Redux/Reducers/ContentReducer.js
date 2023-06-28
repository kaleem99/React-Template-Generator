import { CHANGE_FILE_CONTENT } from "../actions";
const initialSTATE = { fileContent: "" };
export const contentReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case CHANGE_FILE_CONTENT:
      state.fileContent = action.payload;
      console.log(state)
      return { ...state };
    default:
      return state;
  }
};

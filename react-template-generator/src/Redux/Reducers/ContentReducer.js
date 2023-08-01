import {
  CHANGE_FILE_CONTENT,
  EXPORT_TEMPLATE_POPUP,
  FILTER_GITHUB_FILES,
  UPDATE_TEMPLATE,
} from "../actions";
const initialSTATE = { fileContent: "", popup: false, githubFiles: "" };
export const contentReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case CHANGE_FILE_CONTENT:
      state.fileContent = action.payload;
      return { ...state };
    case EXPORT_TEMPLATE_POPUP:
      state.popup = action.payload;
      return { ...state };
    case FILTER_GITHUB_FILES:
      state.githubFiles = action.payload;
      return { ...state };
    case UPDATE_TEMPLATE:
      let newFileContent = state.fileContent;
      newFileContent.content = btoa(action.payload);
      state.fileContent = newFileContent;
      return { ...state };
    default:
      return state;
  }
};

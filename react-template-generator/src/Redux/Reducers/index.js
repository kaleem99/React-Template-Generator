import { combineReducers } from "redux";
import { mainNavigationReducer } from "./MainNavigationReducer";
import { platformReducer } from "./PlatformReducer";
import { sectionsReducer } from "./SectionsReducer";
import { githubReducer } from "./GithubReducer";
import { contentReducer } from "./ContentReducer";
export default combineReducers({
  mainNavigationReducer,
  platformReducer,
  sectionsReducer,
  githubReducer,
  contentReducer,
});

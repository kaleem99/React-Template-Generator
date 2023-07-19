import { combineReducers } from "redux";
import { mainNavigationReducer } from "./MainNavigationReducer";
import { platformReducer } from "./PlatformReducer";
import { sectionsReducer } from "./SectionsReducer";
import { githubReducer } from "./GithubReducer";
import { contentReducer } from "./ContentReducer";
import { welcomePageReducer } from "./WelcomePageReducer";
import { saveAndViewReducer } from "./saveReducer";
import { tryItContentReducer } from "./TryItContentReducer";
import { nextStepsReducer } from "./NextStepsReducer";
export default combineReducers({
  mainNavigationReducer,
  platformReducer,
  sectionsReducer,
  githubReducer,
  contentReducer,
  welcomePageReducer,
  saveAndViewReducer,
  tryItContentReducer,
  nextStepsReducer,
});

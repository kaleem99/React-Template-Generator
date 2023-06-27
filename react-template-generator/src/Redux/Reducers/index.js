import { combineReducers } from "redux";
import { mainNavigationReducer } from "./MainNavigationReducer";
import { platformReducer } from "./PlatformReducer";
import { sectionsReducer } from "./SectionsReducer";
export default combineReducers({
  mainNavigationReducer,
  platformReducer,
  sectionsReducer,
});

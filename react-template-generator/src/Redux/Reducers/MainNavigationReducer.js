import {
  MENU_OPEN_CLOSE,
  TEMPLATES_DROPDOWN,
  BUILD_RESOURCES_DROPDOWN,
  SEARCH_BAR,
} from "../actions";
const initialSTATE = {
  menuOpenOrClose: true,
  templates: false,
  buildResources: false,
  searchBar: false,
};
export const mainNavigationReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case MENU_OPEN_CLOSE:
      state.menuOpenOrClose = action.payload;
      return { ...state };
    case TEMPLATES_DROPDOWN:
      state.templates = action.payload;
      return { ...state };
    case BUILD_RESOURCES_DROPDOWN:
      state.buildResources = action.payload;
      return { ...state };
    case SEARCH_BAR:
      state.searchBar = action.payload;
      return { ...state };
    default:
      return state;
  }
};

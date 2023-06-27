import { MENU_OPEN_CLOSE } from "../actions";
const initialSTATE = { menuOpenOrClose: false };
export const mainNavigationReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case MENU_OPEN_CLOSE:
      state.menuOpenOrClose = action.payload;
      return { ...state };
    default:
      return state;
  }
};

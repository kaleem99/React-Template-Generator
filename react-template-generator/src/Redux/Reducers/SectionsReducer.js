import { CHANGE_SECTION } from "../actions";
const initialSTATE = { Sections: "Welcome Page" };
export const sectionsReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case CHANGE_SECTION:
      state.Sections = action.payload;
      return { ...state };
    default:
      return state;
  }
};

import { WELCOME_PAGE_ONCHANGE } from "../actions";
const initialSTATE = {};
export const welcomePageReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case WELCOME_PAGE_ONCHANGE:
      const { name, value } = action.payload;
      state[name] = value;
      return { ...state };
    default:
      return state;
  }
};

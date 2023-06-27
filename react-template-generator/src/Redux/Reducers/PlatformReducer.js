import { CHANGE_PLATFORM } from "../actions";
const initialSTATE = { Platform: "" };
export const platformReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case CHANGE_PLATFORM:
      state.Platform = action.payload;
      console.log(state);
      return { ...state };
    default:
      return state;
  }
};

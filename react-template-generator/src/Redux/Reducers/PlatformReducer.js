import { CHANGE_PLATFORM, SELECT_PLATFORM } from "../actions";
const initialSTATE = { Platform: "", Select: "" };
export const platformReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case CHANGE_PLATFORM:
      state.Platform = action.payload;
      return { ...state };
    case SELECT_PLATFORM:
      state.Select = action.payload;
      return { ...state };
    default:
      return state;
  }
};

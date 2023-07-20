import { NEXT_STEPS_ONCHANGE } from "../actions";
const initialSTATE = {};
export const nextStepsReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case NEXT_STEPS_ONCHANGE:
      console.log(action.payload);
      const { name, value } = action.payload;
      state[name] = value;
      console.log(state);
      return { ...state };
    default:
      return state;
  }
};

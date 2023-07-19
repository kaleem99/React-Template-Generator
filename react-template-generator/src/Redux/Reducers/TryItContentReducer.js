import { TRY_IT_PAGE_ONCHANGE } from "../actions";
const initialSTATE = {};
export const tryItContentReducer = (state = initialSTATE, action) => {
  switch (action.type) {
    case TRY_IT_PAGE_ONCHANGE:
      console.log(action.payload);
      //   const { name, value } = action.payload;
      //   state[name] = value;
      state.content = action.payload;
      console.log(state)
      return { ...state };
    default:
      return state;
  }
};

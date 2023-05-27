import { initialState } from "./initialState.js";
import { NEW_API_DATA } from "./types";

//create logic that manipulates state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API_DATA:
      return { ...state, simpsons: action.payload };
    default:
      console.log("reducer started OR INVALID reducer type. probably a typo");
      return state;
  }
}

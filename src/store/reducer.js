import { initialState } from "./initialState.js";
import { NEW_API_DATA, SET_SEARCH_INPUT } from "./types";

//create logic that manipulates state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API_DATA:
      return { ...state, simpsons: action.payload };

    case SET_SEARCH_INPUT:
      return { ...state, searchInput: payload };
    default:
      console.log("reducer started OR INVALID reducer type. probably a typo");
      return state;
  }
}

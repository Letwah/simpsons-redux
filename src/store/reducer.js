import { initialState } from "./initialState.js";
import {
  NEW_API_DATA,
  SET_SEARCH_INPUT,
  LIKE_TOGGLE,
  DELETE_TOGGLE,
  LIKE_DISLIKE_OPTION,
} from "./types";

//create logic that manipulates state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case NEW_API_DATA:
      return { ...state, simpsons: action.payload };

    case SET_SEARCH_INPUT:
      return { ...state, searchInput: action.payload };

    case LIKE_TOGGLE: {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.id;
      });
      const simpsons = [...state.simpsons];
      //invert if liked or not liked
      simpsons[indexOf].liked = !simpsons[indexOf].liked;
      return { ...state, simpsons };
    }

    case LIKE_DISLIKE_OPTION: {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.id;
      });
      const simpsons = [...state.simpsons];

      return { ...state, simpsons };
    }

    case DELETE_TOGGLE: {
      const indexOf = state.simpsons.findIndex((char) => {
        return char.id === action.id;
      });
      const simpsons = [...state.simpsons];
      simpsons.splice(indexOf, 1);
      return { ...state, simpsons };
    }

    default:
      console.log("reducer started OR INVALID reducer type. probably a typo");
      return state;
  }
}

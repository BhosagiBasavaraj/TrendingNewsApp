import {
  LOAD_PARTICULAR_PRODUCTS_START,
  LOAD_PARTICULAR_PRODUCTS_SUCCESS,
  LOAD_PARTICULAR_PRODUCTS_FAIL,
} from "../../utils/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PARTICULAR_PRODUCTS_START:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };

    case LOAD_PARTICULAR_PRODUCTS_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    case LOAD_PARTICULAR_PRODUCTS_FAIL:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}

import {
    LOAD_SEARCH_START,
    LOAD_SEARCH_SUCCESS,
    LOAD_SEARCH_FAIL
} from "../utils/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_SEARCH_START:
            return {
                ...state,
                ...action.payload,
                isLoading: true,
            };

        case LOAD_SEARCH_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        case LOAD_SEARCH_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        default:
            return state;
    }
}

import {
    SAVE_FILTER_OPTIONS
} from "../utils/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_FILTER_OPTIONS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

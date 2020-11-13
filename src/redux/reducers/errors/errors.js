import { GET_ERRORS, REMOVE_EXISTING_ERRORS } from "../../utils/types";

const initialState = {
    msg: {},
    status: null

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            };
        case REMOVE_EXISTING_ERRORS:
            return {
                ...state,
                msg: {},
                status: null
            }
        default:
            return state;
    }
}
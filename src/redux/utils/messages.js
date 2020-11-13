import { CREATE_MESSAGE, GET_ERRORS, REMOVE_EXISTING_ERRORS } from "./types";

// CREATE MESSAGE
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status, data) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, data }
  };
};
export const removeExistingErrors = () => {
  return {
    type: REMOVE_EXISTING_ERRORS
  }
}

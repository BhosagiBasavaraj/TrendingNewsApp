import axios from "axios";
import { baseURL } from "../../utils/ApiRequestPaths";
import { returnErrors } from "../../utils/messages";
import {
  LOAD_PARTICULAR_PRODUCTS_START,
  LOAD_PARTICULAR_PRODUCTS_SUCCESS,
  LOAD_PARTICULAR_PRODUCTS_FAIL,
} from "../../utils/types";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'





export const loadParticularProduct = (id) => (dispatch, getState) => {

  dispatch({ type: LOAD_PARTICULAR_PRODUCTS_START });

  axios
    .get(`${baseURL}/products/${id}`)

    .then(res => {
      dispatch({
        type: LOAD_PARTICULAR_PRODUCTS_SUCCESS,
        payload: res

      });
    })
    .catch(err => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_PARTICULAR_PRODUCTS_FAIL
      });
    });
};
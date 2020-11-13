import axios from "axios";
import { baseURL } from "../../utils/ApiRequestPaths";
import { returnErrors } from "../../utils/messages";
import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_FAIL,
  SAVE_FILTER_OPTIONS,
  LOAD_SEARCH_START,
  LOAD_SEARCH_SUCCESS,
  LOAD_SEARCH_FAIL
} from "../../utils/types";



export const loadInitialCountry = (country) => (dispatch, getState) => {
  let apiKey = '61d9771aba4c4c74b6f2adf7814fdb5c';
  dispatch({ type: LOAD_PRODUCTS_START });
  axios
    .get(`${baseURL}?language=en&country=${country}&apiKey=${apiKey}`)
    .then(res => {
      dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_PRODUCTS_FAIL
      });
    });
};


export const loadFilteredNews = (code, initialCountry) => (dispatch, getState) => {
  let apiKey = '61d9771aba4c4c74b6f2adf7814fdb5c';
  dispatch({ type: LOAD_PRODUCTS_START });
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=${initialCountry}&category=${code}&apiKey=${apiKey}`)
    .then(res => {
      dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        payload: res.data

      });
    })
    .catch(err => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_PRODUCTS_FAIL
      });
    });
};



export const saveFilteredData = (code, initialCountry) => (dispatch, getState) => {
  dispatch({
    type: SAVE_FILTER_OPTIONS,
    // payload: [code, initialCountry]
    payload: { 'keyWord': code, 'country': initialCountry }
  });

};



export const loadFilteredResults = (code, initialCountry) => (dispatch, getState) => {
  let apiKey = '61d9771aba4c4c74b6f2adf7814fdb5c';
  dispatch({ type: LOAD_SEARCH_START });
  axios
    .get(`https://newsapi.org/v2/top-headlines?country=${initialCountry}&category=${code}&apiKey=${apiKey}`)
    .then(res => {
      dispatch({
        type: LOAD_SEARCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      // dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_SEARCH_FAIL
      });
    });
};
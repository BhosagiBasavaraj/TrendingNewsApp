import { combineReducers } from "redux";
import load_products_reducer from "../reducers/load_products_reducer/LoadProductsReducer";
import LoadParticularProductsReducer from "../reducers/load_particular_products_reducer/LoadParticularProductsReducer";
import ItemsInCart from "../reducers/items_in_cart/ItemsInCart";

import messages from '../reducers/messages/messages';
import errors from '../reducers/errors/errors';
import filterRawData from '../reducers/filterRawData';
import loadFilterData from '../reducers/loadFilterData';


export default combineReducers({
  load_products_reducer,
  LoadParticularProductsReducer,
  filterRawData,
  loadFilterData,
  ItemsInCart,
  messages,
  errors,
});

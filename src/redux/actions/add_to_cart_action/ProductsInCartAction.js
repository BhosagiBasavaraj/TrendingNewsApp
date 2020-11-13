import {
    ADD_PRODUCT_TO_CART_START,
    ADD_PRODUCT_TO_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_START,
    REMOVE_PRODUCT_FROM_CART_SUCCESS
} from '../../utils/types';



export const addProductToCart = (
    id, quantity, title, price
) => (dispatch, getState) => {
    dispatch({ type: ADD_PRODUCT_TO_CART_START });
    dispatch({
        type: ADD_PRODUCT_TO_CART_SUCCESS,
        payload: {
            id: id,
            quantity: quantity,
            title: title,
            price: price,
        }
    })
};



export const removeProductFromCart = (id) => (dispatch, getState) => {

    dispatch({ type: REMOVE_PRODUCT_FROM_CART_START });
    dispatch({
        type: REMOVE_PRODUCT_FROM_CART_SUCCESS,
        payload: {
            id: id,
        }
    })
};

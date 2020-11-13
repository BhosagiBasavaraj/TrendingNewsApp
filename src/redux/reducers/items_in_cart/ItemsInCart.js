import {
    ADD_PRODUCT_TO_CART_START,
    ADD_PRODUCT_TO_CART_SUCCESS,
    REMOVE_PRODUCT_FROM_CART_START,
    REMOVE_PRODUCT_FROM_CART_SUCCESS,
    REMOVE_CART_ITEMS_ON_SUCCESS

} from '../../utils/types';


const initialState = {
    cart: [],
    total: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART_START:
            return {
                ...state,
                isLoading: true,
            };

        case ADD_PRODUCT_TO_CART_SUCCESS:
            let addedItem = state.cart.find(item => item.id === action.payload.id);
            if (addedItem) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.id === action.payload.id ? action.payload : item)
                }

            } else {
                return {
                    ...state,
                    cart: [action.payload, ...state.cart],
                    total: state.total + 1,
                    isLoading: false,
                }
            }










        case REMOVE_PRODUCT_FROM_CART_START:
            return {
                ...state,
                isLoading: true,
            };
        case REMOVE_PRODUCT_FROM_CART_SUCCESS:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - 1,
                isLoading: false,
            };





        case REMOVE_CART_ITEMS_ON_SUCCESS:
            return {
                ...state,
                cart: [],
                total: 0

            }



        default:
            return state
    }
}
















// export default function (state = initialState, action) {
//     switch (action.type) {
//         case ADD_PRODUCT_TO_CART_START:
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         case ADD_PRODUCT_TO_CART_SUCCESS:
//             return {
//                 ...state,
//                 cart: [action.payload, ...state.cart],
//                 total: state.total + 1,
//                 isLoading: false,
//             }
//         default:
//             return state
//     }
// }

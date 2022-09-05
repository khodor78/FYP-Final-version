import {
  CART_ADD_ITEM_PERSONAL_DETAILS,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_SOCIAL_MEDIA_FAIL,
  CART_SAVE_SOCIAL_MEDIA_REQUEST,
  CART_SAVE_SOCIAL_MEDIA_SUCCESS,
} from '../constants/cartConstants';

export const cartAddReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM_PERSONAL_DETAILS:
      const item = action.payload;

      return { ...state, cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return { ...state, PersonalDetails: action.payload };
    default:
      return state;
  }
};


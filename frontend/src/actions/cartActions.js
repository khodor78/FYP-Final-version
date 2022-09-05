import Axios from 'axios';
import {
  CART_ADD_ITEM_PERSONAL_DETAILS,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_SOCIAL_MEDIA_FAIL,
  CART_SAVE_SOCIAL_MEDIA_REQUEST,
  CART_SAVE_SOCIAL_MEDIA_SUCCESS,
} from '../constants/cartConstants';

export const addToCart = (data) => (dispatch, getState) => {
  dispatch({ type: CART_ADD_ITEM_PERSONAL_DETAILS, payload: data });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
export const savePersonalDetails = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('PersonalDetails', JSON.stringify(data));
};
export const createSocialAction =
  (data) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CART_SAVE_SOCIAL_MEDIA_REQUEST,
      });
      dispatch({
        type: CART_SAVE_SOCIAL_MEDIA_SUCCESS,
        
        payload: data,
        
      });
      localStorage.setItem('socialmedia', JSON.stringify(getState().social.socialmedia));

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CART_SAVE_SOCIAL_MEDIA_FAIL,
        payload: message,
      });
    }
  };












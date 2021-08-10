import { Types } from './types';

export const addPizzaToCart = (payload) => ({
  type: Types.ADD_PIZZA_TO_CART,
  payload,
});
export const removePizzaToCart = (payload) => ({
  type: Types.REMOVE_PIZZA_TO_CART,
  payload,
});

export const clearCart = () => ({
  type: Types.CLEAR_CART,
});

export const removeCartItem = (id) => ({
  type: Types.REMOVE_CART_ITEM,
  payload: id,
});

export const plusCartItem = (id) => ({
  type: Types.PLUS_CART_ITEM,
  payload: id,
});
export const minusCartItem = (id) => ({
  type: Types.MINUS_CART_ITEM,
  payload: id,
});

import { Types } from './types';

export const addPizzaToCart = (payload) => ({
  type: Types.ADD_PIZZA_TO_CART,
  payload,
});

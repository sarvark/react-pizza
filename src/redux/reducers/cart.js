import { Types } from '../actions/types';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_PIZZA_TO_CART: {
      if (!state.items[payload.id]) {
        state.items[payload.id] = [];
      }
      const newItems = {
        ...state.items,
        [payload.id]: [...state.items[payload.id], payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => (sum += +obj.price), 0);

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount: allPizzas.length,
      };
    }
    case Types.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: payload,
      };
    case Types.SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: payload,
      };
    default:
  }
  return state;
};

export default cart;

import { Types } from '../actions/types';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => +obj.price + sum, 0);

const getAllPizzas = (mainObj) => {
  return [].concat.apply(
    [],
    Object.values(mainObj).map((obj) => obj.items),
  );
};

const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.ADD_PIZZA_TO_CART: {
      let currentPizzaItems = state.items[payload.id];
      let newPizzaItems = currentPizzaItems ? [...currentPizzaItems.items, payload] : [payload];
      const newItems = {
        ...state.items,
        [payload.id]: {
          items: newPizzaItems,
          totalPrice: getTotalPrice(newPizzaItems),
          totalCount: newPizzaItems?.length,
        },
      };

      const allPizzas = getAllPizzas(newItems);
      const totalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalPrice,
        totalCount: allPizzas.length,
      };
    }
    case Types.PLUS_CART_ITEM: {
      const copyStateItems = { ...state.items };
      const currentStateItems = copyStateItems[payload];
      const currentPizzaItems = currentStateItems.items;
      const currentPizzaPrice = currentPizzaItems[0].price;
      const newItems = [...currentPizzaItems, currentPizzaItems[0]];
      return {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
            totalCount: newItems.length,
          },
        },
        totalPrice: state.totalPrice + currentPizzaPrice,
        totalCount: state.totalCount + 1,
      };
    }
    case Types.MINUS_CART_ITEM: {
      const copyStateItems = { ...state.items };
      const currentStateItems = copyStateItems[payload];
      const oldPizzaItems = currentStateItems.items;
      const currentPizzaPrice = oldPizzaItems[0].price;

      let newItems = oldPizzaItems;
      let totalPrice = state.totalPrice;
      let totalCount = state.totalCount;

      if (oldPizzaItems.length > 1) {
        totalPrice = state.totalPrice - currentPizzaPrice;
        totalCount = state.totalCount - 1;
        newItems = oldPizzaItems.slice(1);
      }
      return {
        ...state,
        items: {
          ...state.items,
          [payload]: {
            items: newItems,
            totalPrice: getTotalPrice(newItems),
            totalCount: newItems.length,
          },
        },
        totalPrice,
        totalCount,
      };
    }
    case Types.CLEAR_CART:
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case Types.REMOVE_CART_ITEM:
      const newItems = { ...state.items };
      const currentTotalPrice = newItems[payload].totalPrice;
      const currentTotalCount = newItems[payload].totalCount;
      delete newItems[payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    default:
  }
  return state;
};

export default cart;

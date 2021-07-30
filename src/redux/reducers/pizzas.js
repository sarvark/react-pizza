import { Types } from '../actions/types';

const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_PIZZAS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case Types.SET_PIZZASS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default pizzas;

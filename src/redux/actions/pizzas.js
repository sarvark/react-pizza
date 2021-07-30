import * as api from '../../api/pizzas';
import { Types } from './types';

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
  dispatch(setLoaded(false));

  const params = {
    category,
    _sort: sortBy.type,
    _order: sortBy.order,
  };
  const data = await api.fetchPizzas(params);
  dispatch(setPizzas(data));
};

export const setPizzas = (payload) => ({
  type: Types.SET_PIZZAS,
  payload,
});

export const setLoaded = (payload) => ({
  type: Types.SET_LOADED_PIZZAS,
  payload,
});

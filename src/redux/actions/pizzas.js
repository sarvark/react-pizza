import * as api from '../../api/pizzas';

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
  type: 'SET_PIZZAS',
  payload,
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

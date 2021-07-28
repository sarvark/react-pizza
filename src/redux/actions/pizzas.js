import * as api from '../../api/pizzas';

export const fetchPizzas = () => async (dispatch) => {
  const data = await api.getAll();
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

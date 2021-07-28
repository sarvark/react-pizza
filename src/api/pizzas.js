import axios from 'axios';
const defaultUrl = 'http://localhost:3001/pizzas';

export async function fetchPizzas(params) {
  const { data } = await axios(params.url || defaultUrl, { params });
  return data;
}

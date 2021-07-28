import axios from 'axios';
const defaultUrl = 'http://localhost:3001/pizzas';

export async function getAll(url = defaultUrl, credentials) {
  const { data } = await axios(url, { params: credentials });
  return data;
}

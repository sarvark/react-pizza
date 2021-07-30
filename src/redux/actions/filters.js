import { Types } from './types';

export const setSortBy = (name) => ({
  type: Types.SET_SORT_BY,
  payload: name,
});

export const setCategory = (payload) => ({
  type: Types.SET_CATEGORY,
  payload,
});

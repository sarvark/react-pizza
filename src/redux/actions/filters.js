export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (payload) => ({
  type: 'SET_CATEGORY',
  payload,
});

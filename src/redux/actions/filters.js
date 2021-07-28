export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});

export const setCategory = (idx) => ({
  type: 'SET_CATEGORY',
  payload: idx,
});

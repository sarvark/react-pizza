import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(({ activeCategory, items, onClickCategory }) => {
  const renderLi = items?.map((el, idx) => {
    return (
      <li
        className={activeCategory === idx ? 'active' : ''}
        onClick={() => onClickCategory(idx)}
        key={el.id}>
        {el.name}
      </li>
    );
  });
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {renderLi}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;

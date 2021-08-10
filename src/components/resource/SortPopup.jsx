import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ArrowDownIcon from '../UI/icons/ArrowDownIcon';

const SortPopup = React.memo(({ items, activeSortType, onClickSortType }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const sortRef = useRef();
  const activeLable = items?.find((el) => el.type === activeSortType)?.name;

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    const path = e?.path || e?.composedPath();
    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const handleClickItem = (type) => {
    onClickSortType(type);
    setVisiblePopup(false);
  };

  const renderLi = items?.map((obj) => {
    return (
      <li
        className={activeSortType === obj.type ? 'active' : ''}
        onClick={() => handleClickItem(obj)}
        key={obj.id}>
        {obj.name}
      </li>
    );
  });

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <ArrowDownIcon visiblePopup={visiblePopup} />
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLable}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>{renderLi}</ul>
        </div>
      )}
    </div>
  );
});

SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func,
};

SortPopup.defaultProps = {
  items: [],
  onClickSortType: () => {},
};

export default SortPopup;

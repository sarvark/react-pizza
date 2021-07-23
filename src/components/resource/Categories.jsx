import { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClickItem = (id) => {
    setActiveItem(id);
  };

  const renderLi = items?.map((el, idx) => {
    return (
      <li
        className={activeItem === idx ? 'active' : ''}
        onClick={() => handleClickItem(idx)}
        key={el.id}>
        {el.name}
      </li>
    );
  });
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => handleClickItem(null)}>
          Все
        </li>
        {renderLi}
      </ul>
    </div>
  );
}

export default Categories;

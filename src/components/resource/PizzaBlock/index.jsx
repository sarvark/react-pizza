import classNames from 'classnames';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from '../../../components';
import PlusBoldIcon from '../../UI/icons/PlusBoldIcon';

function PizzaBlock({
  id,
  name,
  sizes,
  price,
  imageUrl,
  types,
  onClickAddPizza,
  addedPizzasCount,
}) {
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(sizes[0]);

  const handleClickType = (idx) => {
    setActiveType(idx);
  };
  const handleClickSize = (idx) => {
    setActiveSize(idx);
  };

  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const handleClickAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: activeSize,
      type: availableTypes[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {availableTypes?.map((type, idx) => (
            <li
              key={type}
              className={classNames({
                active: activeType === idx,
                disabled: !types?.includes(idx),
              })}
              onClick={() => handleClickType(idx)}>
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes?.map((size) => {
            return (
              <li
                key={size}
                className={classNames({
                  active: activeSize === size,
                  disabled: !sizes?.includes(size),
                })}
                onClick={() => handleClickSize(size)}>
                {size} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <BaseButton onClick={handleClickAddPizza} className="button--add" outline>
          <PlusBoldIcon />
          <span>Добавить</span>
          {!!addedPizzasCount && <i>{addedPizzasCount}</i>}
        </BaseButton>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  sizes: PropTypes.array,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  onClickAddPizza: PropTypes.func,
  addedPizzasCount: PropTypes.number,
};

PizzaBlock.defaultProps = {
  name: '---',
  imageUrl:
    'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
  price: 0,
  sizes: [],
  types: [],
};

export default PizzaBlock;

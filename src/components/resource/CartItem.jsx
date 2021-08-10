import React from 'react';
import ClearIcon from '../UI/icons/ClearIcon';
import PlusMinusIcon from '../UI/icons/PlusMinusIcon';
import { BaseButton } from '../../components';

function CartItem({
  id,
  name,
  type,
  size,
  imageUrl,
  totalCount,
  totalPrice,
  onRemove,
  onPlus,
  onMinus,
}) {
  const handleRemoveClick = () => {
    onRemove({ id, name });
  };

  const handlePlusItem = () => {
    onPlus(id);
  };
  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тесто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <div
          onClick={handleMinusItem}
          className="button button--outline button--circle cart__item-count-minus">
          <PlusMinusIcon />
        </div>
        <b>{totalCount}</b>
        <div
          onClick={handlePlusItem}
          className="button button--outline button--circle cart__item-count-plus">
          <PlusMinusIcon />
        </div>
      </div>
      <div className="cart__item-price">
        <b>{totalPrice} ₽</b>
      </div>
      <div className="cart__item-remove">
        <BaseButton onClick={handleRemoveClick} className="button--circle" outline>
          <ClearIcon />
        </BaseButton>
      </div>
    </div>
  );
}

export default CartItem;

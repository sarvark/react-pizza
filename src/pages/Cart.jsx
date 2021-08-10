import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeftIcon, CartEmpty, CartItem, TrashIcon } from '../components';
import { clearCart, minusCartItem, plusCartItem, removeCartItem } from '../redux/actions/cart';
import cartSvg from '../assets/img/cart.svg';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    const currentPizzas = items[key];
    const firstPizza = currentPizzas.items[0];
    return {
      ...firstPizza,
      totalCount: currentPizzas.totalCount,
      totalPrice: currentPizzas.totalPrice,
    };
  });

  const handleClearCart = () => {
    if (!addedPizzas?.length) return;
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const handleRemoveCartItem = (obj) => {
    if (!addedPizzas?.length) return;
    if (window.confirm(`Вы действительно хотите удалить ${obj.name}?`)) {
      dispatch(removeCartItem(obj.id));
    }
  };

  const handlePlusCartItem = React.useCallback((obj) => {
    dispatch(plusCartItem(obj));
  }, []);

  const handleMinusCartItem = React.useCallback((obj) => {
    dispatch(minusCartItem(obj));
  }, []);

  const cartDiv = (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <img src={cartSvg} alt="cart" />
          Корзина
        </h2>
        <div className="cart__clear" onClick={handleClearCart}>
          <TrashIcon />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="content__items">
        {addedPizzas.map((obj) => (
          <CartItem
            key={obj.id}
            {...obj}
            onRemove={handleRemoveCartItem}
            onPlus={(id) => handlePlusCartItem(id)}
            onMinus={(id) => handleMinusCartItem(id)}
          />
        ))}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            Всего пицц: <b>{totalCount} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link to="/" className="button button--outline button--add go-back-btn">
            <ArrowLeftIcon />
            <span>Вернуться назад</span>
          </Link>
          <div className="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );

  return <div className="container container--cart">{totalCount ? cartDiv : <CartEmpty />}</div>;
}

export default Cart;

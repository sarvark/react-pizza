import { Categories, PizzaBlock, SortPopup, PizzaLoadingBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import React from 'react';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryItems = [
  { id: 1, name: 'Мясные' },
  { id: 2, name: 'Вегетарианская' },
  { id: 3, name: 'Гриль' },
  { id: 4, name: 'Острые' },
  { id: 5, name: 'Закрытые' },
];
const sortItems = [
  { id: 1, type: 'popular', name: 'популярности' },
  { id: 2, type: 'price', name: 'цене' },
  { id: 3, type: 'alphabet', name: 'алфавиту' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  // const { caregory, sortBy } = useSelector(({ pizzas }) => pizzas.filters);

  React.useEffect(() => {
    dispatch(fetchPizzas());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryItems} onClickItem={onSelectCategory} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items?.map((item) => <PizzaBlock key={item.id} {...item} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;

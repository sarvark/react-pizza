import { Categories, PizzaBlock, SortPopup } from '../components';

function Home({ items }) {
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
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={categoryItems} onClick={(name) => console.log(name)} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items?.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;

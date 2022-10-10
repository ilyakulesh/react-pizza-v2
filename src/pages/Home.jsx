import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Pagination from "../components/Pagination";
import Catigories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { SearchContext } from "../App";
import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.pizza.items);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = React.useContext(SearchContext);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getPizzas = async () => {
    setIsLoading(true);

    const category = categoryId > 0 ? `&category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";

    try {
      dispatch(
        fetchPizzas({
          category,
          search,
          sortBy,
          order,
          currentPage,
        })
      );
    } catch {
      alert("Ошибка при получении пицц");
    } finally {
      setIsLoading(false);
    }

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div className="container">
      <div className="content__top">
        <Catigories value={categoryId} onClickCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;

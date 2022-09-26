import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Catigories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Catigories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock title="Пепперони" price={300} />
            <PizzaBlock title="С грибами" price={350} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

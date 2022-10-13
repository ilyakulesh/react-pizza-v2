import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63334d6b573c03ab0b5bcff0.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получении пиццы");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;

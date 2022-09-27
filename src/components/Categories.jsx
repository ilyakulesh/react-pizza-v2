import React from "react";

export default function Catigories() {
  const [activeIndex, setActiveIndex] = React.useState(0); 

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
        <li key={value} onClick={() => setActiveIndex(i)} className={activeIndex === i ? "active" : ''}>{value}
        </li>
        ))}
      </ul>
    </div>
  );
  }
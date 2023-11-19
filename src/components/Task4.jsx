// Пример. У нас есть разные товары в магазине.
// Сделайте карточки товаров. У товаров есть цена,
// название, описание и фотография,а также кнопка для
// добавления в корзину.Снизу под товарами реализовать
// корзину, которая выводит их количество,а также названия.
// Реализовать через компоненты.
import React, { useState } from 'react';
import "../style/Task4.css"
const Task4 = () => {
    const [basketItems, setBasketItems] = useState([]);
    const addToBasket = (name,description) => {
        const newItem = { name, description };
        setBasketItems([...basketItems, newItem]);
    };
    return (
        <div>
            <Card name="Товар 1" description="Описание товара 1" addToBasket={addToBasket} img="data:image/jpeg;base64,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" />
            <Card name="Товар 2" description="Описание товара 2" addToBasket={addToBasket} img="data:image/jpeg;base64,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" />
              <Card name="Товар 3" description="Описание товара 3" addToBasket={addToBasket} img="data:image/jpeg;base64,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" />
            <Basket basketItems={basketItems} />
        </div>
    );
}

const Card = ({ name, description,img,addToBasket }) => {

    return (
        <div className="card">
            <img src={img} alt={`Фото ${name}`} />
            <p>Название: {name}</p>
            <p>Описание: {description}</p>
            <button onClick={()=>addToBasket(name,description)}>В корзину</button>
        </div>
    );
}

const Basket = ({ basketItems }) => {
    return (
        <div className="basket">
            <h2>Корзина</h2>
            <p>Количество товара:{basketItems.lenght}</p>
            <ul>
                {basketItems.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Task4;

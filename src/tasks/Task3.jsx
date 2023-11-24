import React  from "react";
import "../css/Task3.css"
// 3. Создайте и запустите приложение React, выводящее
// информацию о кулинарном рецепте в браузер. На-
// пример: название рецепта, составляющие рецепта
// (ингредиенты и их количество), последовательность
// приготовления, фотография готового блюда.
// При разработке нужно использовать классовые ком-
// поненты и синтаксис JSX.
export const Task3=()=>{
    const nameOfRecipe="Мясной пирог";
    const ingredient1="Вода - 150 мл";
    const ingredient2="Масло сливочное (растопленное) - 40 г";
    const ingredient3="Мука - 430-450 г";
    const ingredient4="Молоко (тёплое) - 100 мл";
    const ingredient5="Дрожжи сухие быстродействующие - 7 г";
    const ingredient6="Соль - 1 ч. ложка с горкой";
    const ingredient7="Сахар - 1 ст. ложка";
    const img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPG-hJIqNrrC8emtElr-6bkMPw2M1vj6zeoA&usqp=CAU";
   return(
       <div className="container3">
           <h1>Кулинарный рецепт</h1>
           <p><strong>Название рецепта:</strong> {nameOfRecipe}</p>
          <ul>
            <li>{ingredient1}</li>
            <li>{ingredient2}</li>
            <li>{ingredient3}</li>
            <li>{ingredient4}</li>
            <li>{ingredient5}</li>
            <li>{ingredient6}</li>
            <li>{ingredient7}</li>
          </ul>
           <img src={img} alt="" />
       </div>
   );
}

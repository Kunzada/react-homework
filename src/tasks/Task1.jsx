 import React  from "react";
//  Создайте и запустите приложение React, выводящее
// краткую информацию о вас в браузер. Например: ФИО,
// контактный телефон, электронный адрес.
// При разработке нужно использовать функциональные
// компоненты и синтаксис JSX.
 export const Task1=()=>{
 const FIO="Кузыбахова Наргиза";
 const phone="87982694417";
 const address="kuzybakhovanargiza@gmail.com"
    return(
        <div className="container0">
           <h1>Краткая информация обо мне</h1>
           <p><strong>ФИО: </strong>{FIO}</p>
           <p><strong>Контактный телефон: </strong>{phone}</p>
           <p><strong>Электронный адрес: </strong>{address}</p>
        
        </div>
    );
}

import React  from "react";
import "../css/Task2.css"
// Создайте и запустите приложение React, выводящее
// краткую информацию о вашем городе в браузер. На-
// пример: название города, название страны, год основа-
// ния, несколько фотографий достопримечательностей
// вашего города.
// При разработке нужно использовать функциональные
// компоненты и синтаксис JSX.
export const Task2=()=>{
    const cityName="Astana";
    const countryName="Kazakhstan";
    const yearOfIssue=1991;
    const img1="https://top10.travel/wp-content/uploads/2017/04/han-shatyr.jpg";
    const img2="https://tripplanet.ru/wp-content/uploads/asia/kazakhstan/astana/dostoprimechatelnosti-astany-nur-sultana-480.jpg";
    const img3="https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/5fa808c4-71f5-4662-83d1-4455534a4a16/";
   return(
       <div className="container2">
         <p><strong>Название города: </strong>{cityName}</p>
         <p><strong>Название страны: </strong>{countryName}</p>
         <p><strong>Год основания: </strong>{yearOfIssue}</p>
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
       </div>
   );
}

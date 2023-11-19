// Сделайте одностраничный сайт с компонентами. Шапка отдельно.
// Главная страница отдельно. Подвал отдельно. 
//Левая секция с контактами отдельно.
import React from 'react';
import "../style/Task3.css";
const Task3 = () => {
    return (
        <div>
            <Header name="Step"></Header>
            <Main></Main>
            <LeftSection tel="8(700)000-00-00" Address="ул. Сыганак 47, Астана 010000"></LeftSection>
            <Footer author="Author 1" site="https://www.instagram.com/" ></Footer>
        </div>
    );
}
const Header=({name})=>{
    return(
        <div class="header">
        <a href="#default" class="logo">{name}</a>
        <div class="header-right">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    )
}
const Main=()=>{
return(
    <article class="all-browsers">
  <h1>Most Popular Browsers</h1>
  <article class="browser">
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>
  </article>
)
}
const LeftSection=({email,tel,Address})=>{
    return (
        <div className='leftSection'>
          <h2>Contact Information</h2>
          <p>Email: {email}</p>
          <p>Phone: {tel}</p>
          <p>Address: {Address}</p>
        </div>
      );

}
const Footer=({author,site})=>{
return(
    <>
<footer>
  <p>Author: {author}<br />
  <a href={site}></a>{site}</p>
</footer>
</>
);
}

export default Task3;

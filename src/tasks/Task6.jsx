import React from 'react';

export class Task6 extends React.Component {
  render() {
    return (
      <div>
        <AboutMe
          FIO="Kuzybakhova Nargiza"
          Phone="87082690000"
          Email="kuzybakhovanargiza@gmail.com"
          City="Astana"
          Experience="1"
          Skills="hard-working"
        />
      </div>
    );
  }
}

function AboutMe(props) {
  return (
    <div className="container6">
      <p>
        <strong>ФИО: </strong>{props.FIO}
      </p>
      <p>
        <strong>Телефон: </strong>{props.Phone}
      </p>
      <p>
        <strong>email: </strong>{props.Email}
      </p>
      <p>
        <strong>Город проживания: </strong>{props.City}
      </p>
      <p>
        <strong>Опыт работы: </strong>{props.Experience}
      </p>
      <p>
        <strong>Навыки: </strong>{props.Skills}
      </p>
    </div>
  );
}

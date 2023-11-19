// Сделайте приложение Блог с двумя дочерними компонентами Запись и Комментарии.
// Блог должен хранить всю информацию о Записи и Комментариях и обновляться при добавлении комментария.
// В Записи предусмотреть счётчик комментариев.
import React, {useState} from "react";

const Task2 = () => {

  return (
    <div>
      <h2>Блог</h2>
      <Record></Record>
      
    </div>
  );
};

const Record = () => {
  const [name, setName] = useState("");
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const addComment = () => {
    if (name && commentText) {
      // Создаем новый комментарий
      const newComment = { name, commentText };

      // Обновляем состояние комментариев
      setComments([...comments, newComment]);

      // Очищаем поля ввода
      setName("");
      setCommentText("");
    }
  };

  return (
    <div>
      <h1>Количество комментариев: {comments.length}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Введите имя"
      />
      <br />
      <br />
      <textarea
        cols="40"
        rows="10"
        value={commentText}
        onChange={(e) => {
          setCommentText(e.target.value);
        }}
        placeholder="Введите свое сообщение"
      />
      <br />
      <button onClick={addComment}>Отправить</button>

      {/* Отображение комментариев */}
      <div>
        {comments.map((comment, index) => (
          <Comment key={index} name={comment.name} comment={comment.commentText} />
        ))}
      </div>
    </div>
  );
};
const Comment = ({name,comment}) => {
  return <div className="comment">
<h5>{name}</h5>
<p>{comment}</p>
  </div>;
};
export default Task2;

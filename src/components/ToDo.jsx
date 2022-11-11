import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import PopUp from './PopUp';
import { day } from './Header';
import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [popup, setPopup] = useState({
    show: false,
    id: null,
  });
  const handleDelete = (id) => setPopup({ show: true, id });

  const handleDeleteTrue = () => {
    if (popup.show && popup.id) {
      let filteredData = todos.filter((todo) => todo.id !== popup.id);
      setTodos(filteredData);
      setPopup({
        show: false,
        id: null,
      });
    }
  };
  const handleDeleteFalse = () => setPopup({ show: false, id: null });

  const handleIsCompleteChange = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteToDo = (e) => handleDelete(e.target.getAttribute('data-id'));

  return (
    <>
      <div className="top-container">
        <div className="container">
          <div className="heading my-4">
            <h1>
              To do list
              <ReceiptLongSharpIcon />
            </h1>
          </div>

          <ToDoForm
            onSubmit={(task) => {
              setTodos((todos) => [
                ...todos,
                {
                  id: uuid(),
                  task: task,
                  isCompleted: false,
                  createdAt: day,
                },
              ]);
            }}
          />
          <ToDoList
            todos={todos}
            handleIsCompleteChange={handleIsCompleteChange}
            deleteToDo={deleteToDo}
          />

          {popup.show && (
            <PopUp
              handleDeleteTrue={handleDeleteTrue}
              handleDeleteFalse={handleDeleteFalse}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ToDo;

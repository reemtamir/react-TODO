import TodoItem from './ToDoItem';

const ToDoList = ({ todos, handleIsCompleteChange, deleteToDo }) => {
  return (
    <>
      <ul >
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              task={{ ...todo }}
              handleIsCompleteChange={() => handleIsCompleteChange(todo.id)}
              deleteToDo={deleteToDo}
            />
          );
        })}
      </ul>
    </>
  );
};
export default ToDoList;

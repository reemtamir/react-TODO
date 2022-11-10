import { useState } from 'react';

let error = '';
const ToDoForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');
  const addTask = () => {
    if (task.length < 3) {
      error += 'Must be more then 2 characters';
      setTask('');
    } else {
      onSubmit(task);
      setTask('');
    }
  };

  return (
    <>
      <div className="ms-4  w-25 ">
        <div className="input-group-text  ">
          <input
            className="form-control fs-2"
            onChange={(e) => {
              error = '';
              setTask(e.target.value);
            }}
            type="text"
            name="to-do"
            id="input"
            placeholder="To do..."
            value={task}
          />

          <button onClick={addTask} className="btn btn-info ms-3">
            Add
          </button>
        </div>
        <h2>{error}</h2>
      </div>
    </>
  );
};
export default ToDoForm;

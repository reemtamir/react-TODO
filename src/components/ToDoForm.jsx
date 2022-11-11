import { useState } from 'react';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';

let error = '';
const ToDoForm = ({ onSubmit }) => {
  const [task, setTask] = useState('');
  const [isMouseOver, setIsHoverColor] = useState(false);
  const addTask = () => {
    if (task.length < 3) {
      error += 'Must be more then 2 characters';
      setTask('');
    } else {
      onSubmit(task);
      setTask('');
    }
  };
  const handleMouseHover = () => {
    setIsHoverColor(true);
  };
  const handleMouseOut = () => {
    setIsHoverColor(false);
  };

  return (
    <>
      <div className="ms-4  w-50 mb-5 ">
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

          <button
            style={{
              backgroundColor: isMouseOver ? 'lightgreen' : 'green',
              color: 'white',
            }}
            onMouseOut={handleMouseOut}
            onMouseOver={handleMouseHover}
            onClick={addTask}
            className="btn ms-3"
          >
            <AddTaskRoundedIcon />
          </button>
        </div>
        <h2>{error}</h2>
      </div>
    </>
  );
};
export default ToDoForm;

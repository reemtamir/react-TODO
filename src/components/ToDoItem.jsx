import { useState } from 'react';

const ToDoItem = ({ task, handleIsCompleteChange, deleteToDo }) => {
  const dateToString = task.createdAt.toString();
  let dayToShow = '';
  for (let i = 0; i < 25; i++) {
    dayToShow += dateToString[i];
  }

  const [isReadOnly, setIsReadOnly] = useState(true);
  const [edit, setEdit] = useState('Edit');
  const [height, setHeight] = useState('');
  const [mark, setMark] = useState('none');
  const [color, setColor] = useState('black');
  const editToto = () => {
    setIsReadOnly((isReadOnly) => !isReadOnly);
    setEdit((edit) => (edit = edit === 'Edit' ? 'Save' : 'Edit'));
    setHeight((height) => (height = height === '' ? 70 : ''));
  };
  const markTxt = () => {
    setMark((mark) => (mark = mark === 'none' ? 'line-through' : 'none'));

    setColor((color) => (color = color === 'red' ? 'black' : 'red'));
  };
  return (
    <>
      <li className="list-group-item ">
        {' '}
        <div className="input-group mb-3  ">
          <div className="input-group-prepend ">
            <div className="input-group-text ">
              <button
                data-id={task.id}
                onClick={deleteToDo}
                className="btn btn-danger me-3 "
              >
                Delete
              </button>
              <button
                onClick={editToto}
                data-id={task.id}
                className="btn btn-success me-3"
              >
                {edit}
              </button>
              <input
                onClick={markTxt}
                className="me-3 "
                checked={task.isCompleted}
                type="checkbox"
                aria-label="Checkbox for following text input"
                onChange={handleIsCompleteChange}
              />
              <span>
                Created:
                <span className="fs-5 me-3">{dayToShow}</span>
              </span>
              <input
                style={{
                  textDecorationLine: mark,
                  height: height,
                  color: color,
                }}
                data-id={task.id}
                type="text"
                className="form-control fs-3  "
                aria-label="Text input with checkbox"
                defaultValue={task.task}
                readOnly={isReadOnly}
              />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default ToDoItem;

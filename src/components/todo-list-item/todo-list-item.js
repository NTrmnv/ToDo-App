import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  
const trashIcon = <FontAwesomeIcon icon={faTrash} />
const ExclamationIcon = <FontAwesomeIcon icon={faExclamation} />


  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        {ExclamationIcon}
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        {trashIcon}
      </button>
    </span>
  );
};

export default TodoListItem;

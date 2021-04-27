import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


import './todo-list-item.css';

export default class TodoListItem extends Component{
  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }
    const trashIcon = <FontAwesomeIcon icon={faTrash} />
    const ExclamationIcon = <FontAwesomeIcon icon={faExclamation} />
    
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={ onToggleDone }>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ onToggleImportant }>
          {ExclamationIcon}
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={ onDeleted }>
          {trashIcon}
        </button>
      </span>
    );
  }
}



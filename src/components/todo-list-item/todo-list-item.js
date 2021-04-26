import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'


import './todo-list-item.css';

export default class TodoListItem extends Component{

  state = {
      done: false,
      important: false
  }

  onLabelClick = () => this.setState(({ done }) => {
    return {
      done: !done
    }
  })

  onMarkImportant = () => this.setState(({ important }) => {
    return{
      important: !important
    }
  })

  render() {
    const { label } = this.props;
    const { done, important } = this.state;

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
          onClick={ this.onLabelClick }>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={ this.onMarkImportant }>
          {ExclamationIcon}
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          {trashIcon}
        </button>
      </span>
    );
  }
}



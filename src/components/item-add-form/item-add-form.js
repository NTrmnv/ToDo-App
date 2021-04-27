import React, { Component } from 'react';

import "./item-add-form.css";

export default class ItemAddForm extends Component {
    render() {
        return (
            <div className="item-add-form d-flex justify-content-between">
                <input type="text"
                  className="form-add add-input form-control"
                  placeholder="Type to add a new item" />
                <button type="button"
                    className="btn btn-outline-info btn-sm float-right"
                    onClick={ () => this.props.onItemAdded('hello') }>
                    Add
                </button>
            </div>
        );
    }
}
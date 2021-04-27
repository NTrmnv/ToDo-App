import React, { Component } from 'react';

import "./item-add-form.css";

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({label: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({ label: '' })
    }

    render() {
        return (
            <form className="item-add-form d-flex justify-content-between"
                  onSubmit={ this.onSubmit }>
                <input type="text"
                  required
                  className="form-add add-input form-control"
                  placeholder="What needs to be done?" 
                  onChange={ this.onLabelChange }
                  value={ this.state.label }/>
                <button 
                    className="btn btn-outline-info btn-sm float-right">
                    Add
                </button>
            </form>
        );
    }
}
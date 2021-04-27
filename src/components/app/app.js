import React, { Component } from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from "../item-add-form";

import "./app.css";

export default class App extends Component {

    maxId = 100;
    
    state = {
        todoData: [
            this.createNewItem('Drink Coffee'),
            this.createNewItem('Create Awesome App'),
            this.createNewItem('Have a Lunch')]
    }
    
    createNewItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
            return {todoData: newArr };
        })
    }

    addItem = (text) => {
        const newItem = this.createNewItem(text);

        this.setState( ({ todoData }) => {
            const newArr = [ ...todoData, newItem ];
            return { todoData: newArr };
        })
    }

    onToggleImportant = (id) => {
        console.log('important', id);
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            // update object
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = { ...oldItem, done: !oldItem.done };
            // construct new array
            const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];
            return { todoData: newArr };
        });
    }

    render () {
        return(
            <div className="todo-app">
                <AppHeader todo={1} done={3}/>
                <div className="top-panel">
                    <SearchPanel/>
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={this.state.todoData}
                    onDeleted= { this.deleteItem }
                    onToggleImportant = { this.onToggleImportant }
                    onToggleDone = { this.onToggleDone }/>
                <ItemAddForm 
                    onItemAdded = { this.addItem }/>
            </div>
        );
    }
}

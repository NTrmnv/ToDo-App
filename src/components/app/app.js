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

    toggleProperty (arr, id, propName) {
        // update object
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [ propName ]: !oldItem[ propName ] };
        // construct new array
        return [...arr.slice(0, idx), newItem, ...arr.slice(idx+1)];       
    }

    onToggleImportant = (id) => {
        this.setState( ({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'important') };
        })
    }

    onToggleDone = (id) => {
        this.setState( ({ todoData }) => {
            return { todoData: this.toggleProperty(todoData, id, 'done') };
        })
    }

    render () {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="todo-app">
                <AppHeader todo={todoCount} done={doneCount}/>
                <div className="top-panel">
                    <SearchPanel/>
                    <ItemStatusFilter />
                </div>
                <TodoList 
                    todos={todoData}
                    onDeleted= { this.deleteItem }
                    onToggleImportant = { this.onToggleImportant }
                    onToggleDone = { this.onToggleDone }/>
                <ItemAddForm 
                    onItemAdded = { this.addItem }/>
            </div>
        );
    }
}

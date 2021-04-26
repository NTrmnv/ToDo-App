import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';

import "./app.css";

const todoData = [
    { label: "Drink Coffee", important: false, id: 1 }, 
    { label: "Create Awesome App", important: true, id: 2 },
    { label: "Have a Lunch", important: false, id: 3 }
]

const App = () => {
    return(
        <div className="todo-app">
            <AppHeader todo={1} done={3}/>
            <div className="top-panel">
                <SearchPanel/>
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;
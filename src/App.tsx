import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './Navigation';
import TodoListBasic from './TodoListBasic';
import TodoListEdit from './TodoListEdit';
import TodoListWithDesign from './TodoListWithDesign';
import TodoListRedux from './TodoListRedux';
import Example from './Example/Example';
import store from './TodoListRedux/store';
import { Provider } from 'react-redux';

const App = () => (
    <div className="app">
        <Navigation />
        <Routes>
            <Route path="/todo-list-basic" element={<TodoListBasic />} />
            <Route path="/todo-list-with-design" element={<TodoListWithDesign />} />
            <Route path="/todo-list-edit" element={<TodoListEdit />} />
            <Route path="/todo-list-redux" element={<TodoListRedux />} />
            <Route path="/example" element={<Example />} />
            <Route path="*" element={<Navigate to="/todo-list-basic" />} />
        </Routes>
    </div>
);

export default App;

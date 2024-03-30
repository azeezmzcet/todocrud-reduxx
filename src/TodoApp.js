import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  return (
    <div>
      <h1>TODO App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;

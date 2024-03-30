import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo({
      text,
      completed: false
    }));
    setText('');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo, updateTodo } from './actions';
import './App.css'; // Import CSS file

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const [editingTodo, setEditingTodo] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo.id);
  };

  const handleSave = (todo) => {
    dispatch(updateTodo(todo));
    setEditingTodo(null);
  };

  return (
    <div className="todo-container"> {/* Apply CSS class */}
      <h2 className="center-text">Todo List</h2> {/* Apply CSS class */}
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {editingTodo === todo.id ? (
              <>
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => dispatch(updateTodo({ ...todo, text: e.target.value }))}
                  placeholder="Enter todo" 
                  className="center-input" 
                />
                <button onClick={() => handleSave(todo)} className="center-button">ok</button> {/* Apply CSS class */}
              </>
            ) : (
              <>
                <div className="center-text">{todo.text}</div> {/* Apply CSS class */}
                <button onClick={() => handleDelete(todo.id)} className="center-button">Delete</button> {/* Apply CSS class */}
                <button onClick={() => handleEdit(todo)} className="center-button">Edit</button> {/* Apply CSS class */}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

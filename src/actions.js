// actions.js

import axios from 'axios';
import { ADD_TODO, DELETE_TODO, UPDATE_TODO, FETCH_TODOS } from './actionTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo
});

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('/todos');
      dispatch({
        type: FETCH_TODOS,
        payload: response.data
      });
    } catch (error) {
      // Handle error
    }
  };
};

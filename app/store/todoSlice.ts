// src/store/todoSlice.ts
import {createSlice} from '@reduxjs/toolkit';
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  category: string;
}

interface TodoState {
  todos: Todo[];
  detail: Todo | null;
}

const initialState: TodoState = {
  todos: [],
  detail: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        ...action.payload,
      };
      console.log('action result', newTodo);
      state.todos.push(newTodo);
    },
   
    setDetailData: (state, action) => {
      const found = state.todos.find(todo => todo.id === action.payload);
      state.detail = found ?? null;
    },
  },
});

export const {addTodo, setDetailData} =
  todoSlice.actions;
export default todoSlice.reducer;

// src/store/todoSlice.ts
import {createSlice} from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  desc: string;
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
    toggleComplete: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    setDetailData: (state, action) => {
      const found = state.todos.find(todo => todo.id === action.payload);
      state.detail = found ?? null;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  updateTodo,
  setDetailData,
  setTodos, // <-- tambahkan ini
} = todoSlice.actions;

export default todoSlice.reducer;

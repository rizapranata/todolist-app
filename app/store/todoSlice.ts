// src/store/todoSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  desc: string;
}

interface TodoState {
  todos: Todo[];
  filteredTodos: Todo[]; // <-- hasil pencarian
  detail: Todo | null;
  keyword: string;
}

const initialState: TodoState = {
  todos: [],
  filteredTodos: [],
  detail: null,
  keyword: '',
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id' | 'completed'>>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        completed: false,
        ...action.payload,
      };
      state.todos.push(newTodo);
      state.filteredTodos = state.todos; // update hasil filter juga
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
      state.filteredTodos = state.todos;
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.todos[index] = action.payload;
        state.filteredTodos = state.todos;
      }
    },
    setDetailData: (state, action: PayloadAction<string>) => {
      const found = state.todos.find(todo => todo.id === action.payload);
      state.detail = found ?? null;
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
      state.filteredTodos = action.payload;
    },

    searchTodo: (state, action: PayloadAction<string>) => {
      const keyword = action.payload.toLowerCase();
      state.keyword = keyword;
      state.filteredTodos = state.todos.filter(
        todo =>
          todo.title.toLowerCase().includes(keyword) ||
          todo.category.toLowerCase().includes(keyword),
      );
    },
    resetFilter: state => {
      state.filteredTodos = state.todos;
      state.keyword = '';
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  updateTodo,
  setDetailData,
  setTodos,
  searchTodo, // <-- export search
  resetFilter, // <-- export reset
} = todoSlice.actions;

export default todoSlice.reducer;

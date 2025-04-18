// app/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoSlice';
import movieReducer from './movie/movieSlice';

export const store = configureStore({
  reducer: {
    todoList: todoSlice,
    movies: movieReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

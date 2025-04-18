import {createSlice} from '@reduxjs/toolkit';

interface MovieState {
  movies: any[];
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMoviesRequest: state => {
      state.loading = true;
      state.error = null;
    },
    fetchMoviesSuccess: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
    },
    fetchMoviesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {fetchMoviesRequest, fetchMoviesSuccess, fetchMoviesFailure} =
  movieSlice.actions;
export default movieSlice.reducer;

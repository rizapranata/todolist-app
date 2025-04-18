import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMovies } from '../../services/movieApi';
import { fetchMoviesFailure, fetchMoviesSuccess, fetchMoviesRequest } from './movieSlice';

function* fetchMoviesSaga(): any {
  try {
    console.log('Saga: fetching movies...');
    const movies = yield call(fetchMovies);
    console.log('Saga: movies fetched', movies);
    yield put(fetchMoviesSuccess(movies));
  } catch (error: any) {
    console.error('Saga error:', error);
    yield put(fetchMoviesFailure(error.message));
  }
}

export default function* watchMoviesSaga() {
  yield takeLatest(fetchMoviesRequest.type, fetchMoviesSaga);
}

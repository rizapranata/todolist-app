import { all } from 'redux-saga/effects';
import watchMoviesSaga from './movie/movieSaga';

export default function* rootSaga() {
  yield all([watchMoviesSaga()]);
}

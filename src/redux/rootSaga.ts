import { all } from 'redux-saga/effects';
import productSaga from './sagas/product/saga';

export default function* rootSaga() {
  yield all([productSaga()]);
}

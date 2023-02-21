import { all } from 'redux-saga/effects';
import wordsSagaWatcher from './wordsSaga';

export default function* rootSaga() {
  yield all([
    wordsSagaWatcher(),
  ]);
  // code after all-effect
}

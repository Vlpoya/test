import axios from 'axios';
import {
  call, put, throttle, delay,
} from 'redux-saga/effects';
import { baseWords } from '../redux/reducer/wordSlice';

const getWords = (input) => axios.post('/wordsall', input);

function* wordsSagaWorker(action) {
  yield delay(2000);
  try {
    const words = yield call(getWords, action.payload);
    yield put(baseWords(words.data));
  } catch (e) {
    yield put(baseWords([{ id: 1, word: 'Error' }]));
  }
}

function* wordsSagaWatcher() {
  yield throttle(1000, 'GET_WORDS_SAGA', wordsSagaWorker);
}

export default wordsSagaWatcher;

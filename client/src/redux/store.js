import { configureStore } from '@reduxjs/toolkit';
import craeteSagaMiddleware from 'redux-saga';
import picturesReduser from './reducer/pictureSlice';
import myPicReducer from './reducer/myPicSlice';
import playersReduser from './reducer/playersSlice';
import wordsReduser from './reducer/wordSlice';
import rootSaga from '../sagas/rootSaga';

const SagaMiddleware = craeteSagaMiddleware();

export default configureStore({
  reducer: {

    pictures: picturesReduser,
    myPic: myPicReducer,
    players: playersReduser,
    words: wordsReduser,

  },
  middleware: (mid) => [...mid(), SagaMiddleware],

});

SagaMiddleware.run(rootSaga);

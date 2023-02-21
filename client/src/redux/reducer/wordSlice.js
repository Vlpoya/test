import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const wordsSlice = createSlice({
  name: 'words',
  initialState: [],
  reducers: {
    setWord: (state, action) => {
      state.value = action.payload;
    },
    findAllWords: (state, action) => {
      state.value.filter((el) => el === action.payload.input);
    },
    baseWords: (state, action) => action.payload,
  },
});
export const { setWord, findAllWords, baseWords } = wordsSlice.actions;
export const setAsyncWord = () => (dispatch) => {
  axios('/wordsget')
    .then((res) => {
      dispatch(setWord(res.data));
    })
    .catch(console.log);
};

export const getWords = (input) => (dispatch) => {
  axios.post('/wordsall', input)
    .then((res) => {
      dispatch(baseWords(res.data));
    })
    .catch(console.log);
};

export const addWordToDB = (word) => () => {
  axios.post('/words', { word })
    .catch(console.log);
};

export const findWords = (input) => (dispatch) => {
  dispatch(findAllWords(input));
};

export default wordsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const picturesSlice = createSlice({
  name: 'pictures',
  initialState: {
    value: [],
  },
  reducers: {
    setPic: (state, action) => {
      state.value = action.payload;
    },

  },
});
export const { setPic } = picturesSlice.actions;
export const setAsyncPic = () => (dispatch) => {
  axios('https://api.opendota.com/api/heroStats')
    .then((res) => {
      dispatch(picturesSlice.actions.setPic(res.data));
    })
    .catch(console.log);
};

export default picturesSlice.reducer;

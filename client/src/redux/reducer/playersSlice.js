import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: [],
  },
  reducers: {
    setPic: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setPic } = playersSlice.actions;

export const findPlayers = ({ el }) => (dispatch) => {
  axios(`https://api.opendota.com/api/rankings?hero_id=${el.id}`)
    .then((res) => {
      dispatch(setPic(res.data));
    })
    .catch(console.log);
};

export default playersSlice.reducer;

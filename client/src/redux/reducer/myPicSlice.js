import { createSlice } from '@reduxjs/toolkit';

export const myPicSlice = createSlice({
  name: 'myPic',
  initialState: {
    value: [],
  },
  reducers: {
    setMyPic: (state, action) => {
      state.value = action.payload;
    },
    setDeletePic: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },

    addMyPic: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { setMyPic, addMyPic, setDeletePic } = myPicSlice.actions;

// export const deletePic = (picId) => (dispatch) => {
//   dispatch(picturesSlice.actions.setDeleteUsers(picId));
// };

export default myPicSlice.reducer;

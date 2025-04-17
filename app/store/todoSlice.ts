import { createSlice } from '@reduxjs/toolkit';

interface todoState {
  detailData: string | null;
}

const initialState: todoState = {
  detailData: null,
};

const dummySlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setDetailData: (state, action) => {
      state.detailData = action.payload;
    },
  },
});

export const { setDetailData } = dummySlice.actions;
export default dummySlice.reducer;

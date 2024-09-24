import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTab: null,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    updateTab: (state, action) => {
      state.selectedTab = action?.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTab } = headerSlice.actions;

export default headerSlice.reducer;

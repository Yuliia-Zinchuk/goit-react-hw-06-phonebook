import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onFilter: (state, { payload }) => {
      if ((state.filter = payload)) state.filter = payload;
      // state.state = state.state.includes(payload);
      //   state.filter = state.toLowerCase().includes(payload.toLowerCase());
    },
  },
});

export const { onFilter } = filterSlice.actions;
export default filterSlice.reducer;

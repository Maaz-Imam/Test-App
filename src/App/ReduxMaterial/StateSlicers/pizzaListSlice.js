import { createSlice } from '@reduxjs/toolkit';

export const pizzaListSlice = createSlice({
  name: 'pizzaList',
  initialState: {
    list: [],
    selections: [],
  },
  reducers: {
    setPizzaList: (state, action) => {
      state.list = action.payload;
    },
    setPizzaSelections: (state, action) => {
      state.selections = action.payload;
    },
  },
});

export const { setPizzaList, setPizzaSelections } = pizzaListSlice.actions;
export default pizzaListSlice.reducer;
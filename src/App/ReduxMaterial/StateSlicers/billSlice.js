import { createSlice } from '@reduxjs/toolkit'

export const billSlice = createSlice({
  name: 'bill',
  initialState: {
    value: 0,
  },
  reducers: {
    addBill: (state, action) => {
      state.value += action.payload
    },
    subBill: (state, action) => {
      state.value -= action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBill, subBill } = billSlice.actions

export default billSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.value.push(action.payload)
    },
    updateCart: (state, action) => {
      const { id, size, qty, price } = action.payload
      const existingItem = state.value.find((cartItem) => cartItem.id === id && cartItem.size === size)
      if (existingItem) {
        existingItem.qty += qty;
        existingItem.price += price;
      }
    },  
    subCart: (state, action) => {
        const { id, size } = action.payload
        state.value = state.value.filter((cartItem) => !(cartItem.id === id && cartItem.size === size));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart, updateCart, subCart } = cartSlice.actions

export default cartSlice.reducer
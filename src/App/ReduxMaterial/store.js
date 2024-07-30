import { configureStore } from '@reduxjs/toolkit'
import logger from '../Logger/cartLogger'
import counterReducer from './StateSlicers/counterSlice'
import cartReducer from './StateSlicers/cartSlice'
import billReducer from './StateSlicers/billSlice'
import pizzaListReducer from './StateSlicers/pizzaListSlice'
import authReducer from './StateSlicers/authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    bill: billReducer,
    pizzaList: pizzaListReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
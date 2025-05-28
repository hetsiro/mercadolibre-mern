import { configureStore } from '@reduxjs/toolkit';
import mercadolibreSlice from '../store/mercadolibre/mercadolibreSlice';
import authSlice from '../store/auth/authSlice';
import cartSlice from '../store/cart/cartSlice';

export const store = configureStore({
  reducer: {
    mercadolibre: mercadolibreSlice,
    auth: authSlice,
    cart: cartSlice
  },
})
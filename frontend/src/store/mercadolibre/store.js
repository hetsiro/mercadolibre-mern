import { configureStore } from '@reduxjs/toolkit'
import mercadolibreSlice from './mercadolibreSlice'

export const store = configureStore({
  reducer: {
    mercadolibre: mercadolibreSlice
  },
})
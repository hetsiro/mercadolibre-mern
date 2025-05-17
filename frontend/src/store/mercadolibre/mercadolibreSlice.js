import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actualItem: null,
    itemsSearched: [],
    categories: [],
    search: '',
    totalPages: [],
    totalProducts: 0,
    page: 1,
    isLoading: true
}

const mercadolibreSlice = createSlice({
  name: 'mercadolibre',
  initialState,
  reducers: {
    updateSearch: (state, { payload }) => {
        state.search = payload;
    },
    updatePage: (state, { payload }) => {
        state.page = payload;
    },
    updateItemsSearched: (state, { payload }) => {
        state.totalPages = payload.totalPages;
        state.totalProducts = payload.totalProducts;
        state.page = payload.page;
        state.itemsSearched = payload.products;
        state.categories = payload.mappedCategories;
        state.isLoading = false;
    },
    setActualItem: (state, { payload }) => {
        state.actualItem = payload;
    },
    setLoading: (state) => {
        state.isLoading = true;
    },
    disableLoading: (state) => {
        state.isLoading = false;
    },
  }
});

export const { uploadItems, updateSearch, updatePage, updateItemsSearched, setActualItem, setLoading, disableLoading } = mercadolibreSlice.actions

export default mercadolibreSlice.reducer
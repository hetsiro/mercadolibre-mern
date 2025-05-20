import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actualItem: null,
    itemsSearched: [],
    categories: [],
    search: '',
    totalPages: [],
    totalProducts: 0,
    totalCategoryProducts: 0,
    totalCategoryPages: 0,
    page: 1,
    isLoading: false,
    firstLoading: true,
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
        state.totalCategoryPages = payload.totalCategoryPages;
        state.totalProducts = payload.totalProducts;
        state.totalCategoryProducts = payload.totalCategoryProducts;
        state.page = payload.page;
        state.itemsSearched = payload.products;
        state.categories = payload.mappedCategories;
        state.isLoading = false;
        if(state.firstLoading) state.firstLoading = false;
    },
    setActualItem: (state, { payload }) => {
        state.actualItem = payload;
        if(state.firstLoading) state.firstLoading = false;
    },
    setLoading: (state) => {
        state.isLoading = true;
    },
    disableLoading: (state) => {
        state.isLoading = false;
    },
    disableFirstLoading: (state) => {
        state.firstLoading = false;
    },
  }
});

export const { uploadItems, updateSearch, updatePage, updateItemsSearched, setActualItem, setLoading, disableLoading, disableFirstLoading } = mercadolibreSlice.actions

export default mercadolibreSlice.reducer
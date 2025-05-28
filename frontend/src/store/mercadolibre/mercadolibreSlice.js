import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    actualItem: null,
    actualItemCache: {},
    itemsSearched: [],
    itemsSearchedCache: {},
    topRated: [],
    worstRated: [],
    categories: [],
    search: '',
    totalPages: [],
    totalProducts: 0,
    totalCategoryProducts: 0,
    totalCategoryPages: 0,
    page: 1,
    isLoading: false,
    firstLoading: false,
    loadedFlags: {
        isTopRatedLoaded: false,
        isWorstRatedLoaded: false,
    }
}

const mercadolibreSlice = createSlice({
    name: 'mercadolibre',
    initialState,
    reducers: {
        updateSearch: (state, { payload }) => {
            state.search = payload;
        },
        updateSearchedItems: (state, { payload }) => {
            state.totalPages = payload.totalPages;
            state.totalCategoryPages = payload.totalCategoryPages;
            state.totalProducts = payload.totalProducts;
            state.totalCategoryProducts = payload.totalCategoryProducts;
            state.page = payload.page;
            state.itemsSearched = payload.products;
            state.categories = payload.mappedCategories;
            state.isLoading = false;
        },
        updateitemsSearchedCache: (state, { payload }) => {
            const { cacheKey, results } = payload;
            state.itemsSearchedCache[cacheKey] = results;
        },
        updateActualItemCache: (state, { payload }) => {
            const { cacheKey, results } = payload;
            state.actualItemCache[cacheKey] = results;
        },
        updatePage: (state, { payload }) => {
            state.page = payload;
        },
        setTopRated: (state, { payload }) => {
            state.topRated = payload;
            state.isTopRatedLoaded = true;
        },
        setWorstRated: (state, { payload }) => {
            state.worstRated = payload;
            state.isWorstRatedLoaded = true;
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
        disableFirstLoading: (state) => {
            state.firstLoading = false;
        },
    }
});

export const { uploadItems, updateSearch, updatePage, updateSearchedItems, updateitemsSearchedCache, updateActualItemCache, setTopRated, setWorstRated, setActualItem, setLoading, disableLoading, disableFirstLoading } = mercadolibreSlice.actions

export default mercadolibreSlice.reducer
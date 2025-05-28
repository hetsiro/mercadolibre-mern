import { API_URL } from '../../config/api';
import { disableLoading, setActualItem, setLoading, setTopRated, setWorstRated, updateSearchedItems, updateSearch, updateitemsSearchedCache, updateActualItemCache } from './mercadolibreSlice';


export const startSearchingProducts = (search, page, category = '') => {
  const URL = `${API_URL}/api/products?q=${search}&page=${page}${category === '' ?  '' : `&category=${category}`}`

  return async (dispatch, getState) => {

    const cacheKey = `${search.trim().toLowerCase()}_category${category}_page${page}`;
    console.log(cacheKey);
    const { itemsSearchedCache } = getState().mercadolibre;

    if (itemsSearchedCache[cacheKey]) {
      dispatch(updateSearchedItems(itemsSearchedCache[cacheKey]));
      dispatch(updateSearch(search));
      return;
    }

    dispatch(setLoading());

    const response = await fetch(URL);
    const data = await response.json();

    await new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 500);
    })

    dispatch(updateSearch(search))
    dispatch(updateSearchedItems(data))
    dispatch(updateitemsSearchedCache({ cacheKey, results: data}))
  }
}

export const startSettingActualProduct = (id) => {



  const url = `${API_URL}/api/products/${id}`

  return async (dispatch, getState) => {

    const { actualItemCache } = getState().mercadolibre;

    if(actualItemCache[id]) {
      dispatch(setActualItem(actualItemCache[id]));
      return;
    }

    dispatch(setLoading());

    const response = await fetch(url);
    const data = await response.json();

    dispatch(setActualItem(data));
    dispatch(updateActualItemCache({cacheKey: id, results: data}));

    await new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 500);
    })

    dispatch(disableLoading());
  }
}

export const startGettingTopRatedProducts = () => {

  const url = `${API_URL}/api/products/top-rated`

  return async (dispatch, getState) => {

    const { isTopRatedLoaded } = getState().mercadolibre;
    if (isTopRatedLoaded) return;

    dispatch(setLoading());

    const response = await fetch(url);
    const data = await response.json();

    dispatch(setTopRated(data));

    await new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 500);
    })

    dispatch(disableLoading());
  }
}

export const startGettingWorstRatedProducts = () => {

  const url = `${API_URL}/api/products/worst-rated`

  return async (dispatch, getState) => {

    const { isWorstRatedLoaded } = getState().mercadolibre;
    if (isWorstRatedLoaded) return;

    dispatch(setLoading());

    const response = await fetch(url);
    const data = await response.json();

    dispatch(setWorstRated(data));

    await new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 500);
    })

    dispatch(disableLoading());
  }
}

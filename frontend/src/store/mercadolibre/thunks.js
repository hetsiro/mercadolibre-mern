import { API_URL } from '../../config/api';
import { disableLoading, setActualItem, setLoading, updateItemsSearched, updateSearch } from './mercadolibreSlice';


export const startSearchingProducts = (search, page, category = '') => {

  const url =`${API_URL}/api/products?q=${search}&page=${page}&category=${category}`

  return async (dispatch) => {
    dispatch(setLoading());
    const response = await fetch(url);
    const data = await response.json();
    await new Promise((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 1000);
    })
    dispatch(updateSearch(search))
    dispatch(updateItemsSearched(data))
  }
}

export const startSettingActualProduct = (id) => {

  const url = `${API_URL}/api/products/${id}`

  return async (dispatch) => {
    dispatch(setLoading());
    const response = await fetch(url);
    const data = await response.json();
    dispatch(setActualItem(data));
    await new Promise(() => {
      setTimeout(() => {
        dispatch(disableLoading());
      }, 1000);
    })

  }
}

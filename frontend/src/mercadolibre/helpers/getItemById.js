import { products2 } from '../data/products2.json';

export const getItemById = ( id ) => {
    return products2.find(( product ) => product.id == id)

}

import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

const appReducer = combineReducers({
    products: products,
    cart:cart,
    message

})

export default appReducer;
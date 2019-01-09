import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('CART'));
var initState = data ? data : [];

const cart = (state = initState, action) => {
    var index = -1;
    var { product, quantity } = action;

    switch (action.type) {
        case types.EXPORT_TO_CART:
            index = findProductInCart(state, product); // find product in cart
            if (index != -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];

        case types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1); // remove a product 
            }
            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];

        case types.UPDATE_PRODUCT_IN_CART:
            index = findProductInCart(state, product); // find product in cart
            if (index != -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];

        default: return [...state];
    }
}

// find id product in cart
var findProductInCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
            }
        }
    }
    return index;
}
export default cart;
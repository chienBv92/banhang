import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'
import Cart from '../component/Main/Cart/Cart';
import * as Message from '../constants/Message';
import CartItem from '../component/Main/Cart/CartItem';
import CartResult from '../component/Main/Cart/CartResult';
import { actDeleteProductCart, actChangeMessage, actUpdateProductInCart } from '../action/addCart';

class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            // lấy dữ liệu sau đó đưa vào component
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var { onDeleteProduct, onChangeMessage, onUpdateProductInCart } = this.props;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key={index} item={item} onDeleteProduct={onDeleteProduct} onChangeMessage={onChangeMessage}
                onUpdateProductInCart={onUpdateProductInCart} ></CartItem>
            })
        }
        return result;
    }

    showTotalAmount = (cart) => {
        var result = null;

        if (cart.length > 0) {
            return <CartResult cart={cart}></CartResult>
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,

            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProp = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(actDeleteProductCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(CartContainer);



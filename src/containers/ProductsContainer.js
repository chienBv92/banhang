import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../component/Main/Products/Products';
import Product from '../component/Main/Products/Product/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../action/addCart';

class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            // lấy dữ liệu sau đó đưa vào component
            <Products >
                {this.showProduct(products)}
            </Products>
        );
    }

    showProduct = (products) => {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product key={index} product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}>
                </Product>
            })
        }
        return result;
    }
}
ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,

    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProp = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            // dung dispatch truyen vao 1 ham add sp 
            dispatch(actAddToCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(ProductsContainer);



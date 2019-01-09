import React, { Component } from 'react';
import Header from './component/Header/Header';
import Products from './component/Main/Products/Products';
import Message from './component/Main/Message/Message';
import Cart from './component/Main/Cart/Cart';
import Footer from './component/Footer/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <Header></Header>

        <main id="mainContainer">
          <div className="container">

            {/* Products */}
            <ProductsContainer></ProductsContainer>

            {/* Message */}
            <MessageContainer></MessageContainer>
            {/* Cart */}
            <CartContainer></CartContainer>

          </div>
        </main>

        {/* Footer */}
        <Footer></Footer>

      </div>
    );
  }
}

export default App;

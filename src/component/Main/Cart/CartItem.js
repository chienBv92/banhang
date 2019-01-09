import React, { Component } from 'react';
import * as Message from '../../../constants/Message';

class CartItem extends Component {
//     constructor(props){
//     super(props);
//     this.state = {
//       quantity:1
//     };
// }
    render() {
      var {item} = this.props;
      var {quantity} = item;
        return (
            <tr>
               <th scope="row">
                    <img src= {item.product.image} alt ={item.product.name} className="img-fluid z-depth-0" />
                        </th>
                        <td>
                          <h5>
                            <strong>{item.product.name}</strong>
                          </h5>
                        </td>
                        <td>{item.product.price} VND</td>
                        <td className="center-on-small-only">
                          <span className="qty">{quantity} </span>
                          <div className="btn-group radio-group" data-toggle="buttons">
                            <label className="btn btn-sm btn-primary
                                                  btn-rounded waves-effect waves-light"
                                                  onClick ={()=> this.onUpdateQty(item.product, item.quantity - 1)}>
                              <a>—</a>
                            </label>
                            <label className="btn btn-sm btn-primary
                                                  btn-rounded waves-effect waves-light"
                                                  onClick ={()=> this.onUpdateQty(item.product, item.quantity + 1)}>
                              <a>+</a>
                            </label>
                          </div>
                        </td>
                        <td>{this.showSubTotal(item.product.price, item.quantity)} VND</td>
                        <td>
                          <button type="button" 
                          className="btn btn-sm btn-primary waves-effect waves-light" 
                          data-toggle="tooltip" data-placement="top"
                          onClick = {()=> this.deleteProduct(item.product)}
                           title data-original-title="Remove item">
                            X
                          </button>
                        </td>         
            </tr>
        );
    }

    deleteProduct = (product)=>{
      this.props.onDeleteProduct(product);
      this.props.onChangeMessage(Message.MSG_DELETE_SUCCESS);
    }

    onUpdateQty = (product, quantity) => {
      var {onUpdateProductInCart, onChangeMessage} = this.props;
      if(quantity > 0){
        // this.setState({
        //   quantity : quantity
        // });
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_SUCCESS);
      }
    }

    showSubTotal = (price, quantity) =>{
      return price*quantity;
    }
}


export default CartItem;
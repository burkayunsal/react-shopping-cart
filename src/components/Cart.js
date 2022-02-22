import React, { Component } from 'react'
import formatCurrency from "../util";


export default class Cart extends Component {
  render() {
      const {cartItems} = this.props;
    return (
      <div>
         {
             cartItems.length === 0 
             ? ( <div className='cart cart-header'>Cart is empty</div> )
             : ( <div className='cart cart-header'>You have {cartItems.length} item in the cart{""}</div> )
         } 
         <div>
            <div>
				{ cartItems.length === 0 ? <div> </div> : (
                        <div className='cart card card-default card-border'>
                        <ul className='cart-items card-body'>
                            {cartItems.map(item =>(
                                    <li key={item.added}>
                                        <div className='row'>
                                            <div className='col'>
                                                {item.name}
                                                <p className='color'>{formatCurrency(item.price)}</p>
                                            </div>
                                            <div className='right'>
                                                <button className='btn border-0 btn-outline-danger' onClick={() =>this.props.minusProductNumber(item)}> - </button>
                                                    {item.count}
                                                <button className='btn border-0 btn-outline-success' onClick={() => this.props.plusProductNumber(item)}> + </button>
                                            </div>
                                        
                                        </div>
                                    </li>
                            ))}

                                <div className='text-warning right'>
                                    {formatCurrency( cartItems.reduce((a,c) => a + c.price * c.count, 0) )}
                                </div>  
                        </ul>
                    </div>
                )}
             </div>
            

    

         </div>
      </div>
    );
  }
}

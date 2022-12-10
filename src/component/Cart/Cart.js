import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    return ( 
        <div className="summary">
            <h2>Order Summary</h2>
                
            <ul>
                <li>Selected Items: {cart.length}</li>
            </ul>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for(const singleeCart of cart) {
        total += singleeCart.price;
        shipping += singleeCart.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2)); 
    const grantTotal = total + tax + shipping;

    return ( 
        <div className="summary">
            <h2>Order Summary</h2>
                
            <ul>
                <li>Selected Items: {cart.length}</li>
                <li>Total Price: ${total}</li>
                <li>Total Shipping Charge: ${shipping}</li>
                <li>Tax: ${tax}</li>
                <li>Grand Total: ${grantTotal}</li>
                <li><button>Clear Cart</button></li>
                <li><button>Review Order</button></li>
            </ul>
        </div>
    );
};

export default Cart;
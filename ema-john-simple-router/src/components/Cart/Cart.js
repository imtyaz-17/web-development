import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const { cart, clearCart } = props;
    let total = 0;
    let shippingCost = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shippingCost = shippingCost + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shippingCost + tax;
    return (
        <div className='cart'>
            <div>
                <h3>Order Summary</h3>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shippingCost}</p>
                <p>Tax: ${tax}</p>
                <p>Grand Total: ${grandTotal}</p>
            </div>

            <div>
                <button onClick={clearCart}>Clear Cart</button>
                <Link to="/orders" ><button>  View Cart Item</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
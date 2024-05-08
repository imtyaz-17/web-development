import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ItemInCart from '../ItemInCart/ItemInCart';
import { deleteShoppingCart, removeFromDb } from '../../utilities/localdb';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const handleRemoveFromCart = (id) => {
        const remainingItems = cart.filter(product => product.id !== id);
        setCart(remainingItems);
        removeFromDb(id);
    }
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <ItemInCart key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ItemInCart>)
                }
                {
                    cart.length === 0 && <h2>No Items in Cart. Please <Link to='/'>Shop more</Link></h2>
                }
            </div >
            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to="/shipping" ><button> Proceed Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Orders;
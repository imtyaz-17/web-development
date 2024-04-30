import React from 'react';
import './Cosmetic.css';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/localdb';
const Cosmetic = (props) => {
    const { _id, name, price } = props.cosmetic;

    const addToCart = (_id) => {
        console.log('added', _id)
        addToDb(_id);
    }
    const removeFromCart = () => {
        removeFromDb(_id);
    }
    const clearCart = () => {
        deleteShoppingCart(_id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(_id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
            <button onClick={() => clearCart(_id)}>Clear</button>
        </div>
    );
};

export default Cosmetic;
import React from 'react';
import './ItemInCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'
const ItemInCart = ({ product, handleRemoveFromCart }) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='item-cart'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='item-cart-details-container'>
                <div className='item-details'>
                    <p>Product: {name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping Cost: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-item'>
                    <button onClick={() => handleRemoveFromCart(product.id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faClose} /></button>
                </div>
            </div>
        </div>
    );
};

export default ItemInCart;
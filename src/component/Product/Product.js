import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;

    return (
        <div className='product-item'>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <p>Manufacturer : {seller}</p>
            <span>Rating : {ratings} start</span>
            <button onClick={()=> props.addCart(props.product)}>Add to Cart  <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
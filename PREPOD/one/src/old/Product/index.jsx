import React from 'react';
import './index.css';

export const Product = ({title, image, price}) => {
    return (
        <div className='productWrapper'>
            <img src={image} width={200}/>
            <h2>{title}</h2>
            <p>{price}$</p>
        </div>
    );
};
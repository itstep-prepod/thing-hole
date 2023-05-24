import React, {useState, useEffect} from 'react';
import { Sale } from './Sale';
import { Product } from './Product';

export function App () {
    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((data) => data.json())
        .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Hello</h1>

            {
                !products ? <h1>Loading...</h1> : <div>DATA!</div> 
            }
            
            {
                products && products.map((productSpecs) => {
                    return (
                        <Sale>
                            <Product key={productSpecs.id} {...productSpecs} />
                        </Sale>
                    )
                })
            }   
    
        </div>
    );
}
import React, { useState } from 'react';
import ProductDate from './ProductDate';
import Card from './Card';  
import './ProductItem.css';

const ProductItem = (props) => {

    const [title ,setTitle] = useState(props.title)

     function clickHandler(){
        setTitle("Laptop");
      console.log("Button clicked")  
    }
    return (
        <Card className="product-items">
            <div className='date'>
                <ProductDate date={props.date} />
            </div>
            <div className='product-item-desc'>
                <h2>{title}</h2>
                <button onClick={clickHandler}>Add to cart</button>
            </div>
        </Card>
    );
}

export default ProductItem;

import React from 'react';
import Button from '../assets/buttons/button';

const ProductItem = (props) => {
    // console.log("Image",props.imgSrc);
    return (
        <>
         <img src={props.imgSrc}></img>
         <div>
            <p>{props.description}</p>
            <p>Favorite Icon</p>
         </div>
         <div>
            <p>{props.currency}</p>
            <p>{props.amount}</p>
         </div>
         <p>{props.rating}</p>
         <Button text={'ADD TO CART'} />
        </>
    )
}

export default ProductItem;
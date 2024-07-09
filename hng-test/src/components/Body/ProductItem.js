import React from 'react';
import Button from '../assets/buttons/button';

const ProductItem = (props) => {
    // console.log("Image",props.imgSrc);
    return (
        <div className='product-item'>
            <img src={props.imgSrc}></img>
            <div className='product-desc'>
                <div>{props.description}</div>
                <div>Fav</div>
            </div>
            <div className='product-amnt'>
                <div>&#x20A6;</div> {/*Fix this Later*/}
                <div>{props.amount}</div>
            </div>
            <div>{props.rating}</div>
            <Button text={'ADD TO CART'} />
        </div>
    )
}

export default ProductItem;
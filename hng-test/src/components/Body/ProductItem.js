import React from 'react';
import Button from '../assets/buttons/button';
import Rating from '../assets/icons/rating';
import Favourite from '../assets/icons/favouriteIcon';

const ProductItem = (props) => {
    // console.log("Image",props.imgSrc);
    return (
        <div className='product-item'>
            <div className='img-wrapper'>
                <div className='img-overlay'>
                </div>
                <img src={props.imgSrc}></img>
            </div>
            <div className='product-desc'>
                <div>{props.description}</div>
                <div><Favourite /></div>
            </div>
            <div className='product-amnt'>
                <div>&#x20A6;</div> {/*Fix this Later*/}
                <div>{props.amount}</div>
            </div>
            <div><Rating /></div>
            <Button text={'ADD TO CART'} />
        </div>
    )
}

export default ProductItem;
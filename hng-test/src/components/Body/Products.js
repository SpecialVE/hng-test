import React from 'react';
import ProductItem from './ProductItem';
import productList from "../../data/productList.json"

const Products = () => {
    const ProductList = productList.map((item) => {
        return (
            <ProductItem
                key={item.description}
                imgSrc={item.imgSrc}
                description={item.description}
                currency ={item.currency}
                amount={item.amount}
                rating={item.rating} 
            />
        )
    })

    return (
        <div className='products-list'>
            {ProductList}
        </div>
    )
}

export default Products;
import React from 'react';
import TopBarItem from './TopBarItem';

const TopBar = () => {
    return (
        <div className='body-top-bar'>
            <TopBarItem value={'All Products'} />
            <TopBarItem value={'Laptops'} />
            <TopBarItem value={'Phones'} />
            <TopBarItem value={'Accessories'} />
        </div>
    )
}

export default TopBar;
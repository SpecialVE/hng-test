import React from 'react';

const TopBarItem = (props) => {
    return (
        <a href={`#${props.value}`} className='top-bar-item'>{props.value}</a>
    )
}

export default TopBarItem;
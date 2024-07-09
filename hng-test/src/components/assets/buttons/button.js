import React from 'react';
import BtnCartIcon from '../icons/btnCartIcon';

const Button = (props) => {
    return (
        <button className='btn'><span>{props.text}</span> <BtnCartIcon /></button>
    )
}

export default Button;
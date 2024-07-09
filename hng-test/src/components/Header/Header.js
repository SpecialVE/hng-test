import React from 'react';
import LinksAndLogos from '../assets/LinksAndLogos/LinksAndLogos';
import Logo from '../assets/icons/logo';
import CartIcon from '../assets/icons/cartIcon';
import ProfileIcon from '../assets/icons/profileIcon';
import SearchBar from '../assets/searchBar';

const Header = () => {
    return (
        <div className='header'>
            <LinksAndLogos link={'/'} img={<Logo />} />
            <SearchBar />
            <LinksAndLogos link={'/cart'} img={<CartIcon/>}/>
            <LinksAndLogos link={'/profile' }img={<ProfileIcon />} />
        </div>
    )
}

export default Header;
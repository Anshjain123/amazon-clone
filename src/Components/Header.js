import React, { useContext, useEffect, useLayoutEffect } from 'react'
import './Header.css'
import StateContext from '../Context/StateContext';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const { state } = useContext(StateContext);
   
    return (
        <div className="header">
            <img className='header__logo' onClick={() => navigate("/")} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            <div className="header__search">
                <input
                    className='header__searchInput'
                    type="text"
                />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne' onClick={()=>navigate("/login")}>
                        Hello Guest
                    </span>
                    <span className='header__optionLineTwo' onClick={()=>navigate("/login")}>
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        {'&'} Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingCartCheckoutIcon onClick={() => navigate("/checkout")} className="header__optionBasketIcon" />
                    <span className="basket__count">
                       {state.basket.length}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
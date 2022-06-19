import React, { useContext, useEffect, useLayoutEffect } from 'react'
import './Header.css'
import StateContext from '../Context/StateContext';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth }  from './firebase'
import { signOut } from "firebase/auth";
import toast, {Toaster} from 'react-hot-toast';  


const Header = () => {
    const navigate = useNavigate();
    const { state } = useContext(StateContext);
    const location = useLocation();
    // navigate(location.pathname, {replace:false}); 
    // console.log(location);


    const handleClicked = () => {
        console.log(location)
        if (state.user === null) {
            navigate("/login");
        } else {
            // navigate(location.pathname, {})
            signOut(auth)
            .then(()=>{
                toast.success("Sign out successfully!!")
            })
            .catch((error)=>{
                toast.error(error.message);
            })
        }
    }
    // console.log(location.state); 
    return (
        <div className="header">
            <Toaster 
                toastOptions={{
                    style:{
                        marginTop:'50px'
                    }
                }}
            />
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
                    <span className='header__optionLineOne' >
                        Hello {state.user === null ? "Guest" : <b style={{ fontSize: '14px', color: '#f08804' }}>{state.user.displayName}</b>}
                    </span>
                    <span className='header__optionLineTwo' onClick={handleClicked}>
                        Sign {state.user === null ? "In" : "Out"}
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
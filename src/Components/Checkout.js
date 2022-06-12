import React, { useContext } from 'react'
import './Checkout.css'
import StateContext from '../Context/StateContext'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
const Checkout = () => {
    const { state } = useContext(StateContext);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className='checkout__ad'
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
                />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {state.basket.map((item, index)=>{
                        return <div key={index}> <CheckoutProduct item = {item}/> </div>
                    })}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
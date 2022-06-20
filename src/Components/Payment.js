import React, { useContext } from 'react'
import StateContext from '../Context/StateContext'
import './Payment.css'
import FlipMove from 'react-flip-move';
import CheckoutProduct from './CheckoutProduct';
import { useNavigate, Link } from 'react-router-dom';

const Payment = () => {
    const { state } = useContext(StateContext);
    const navigate = useNavigate();
    return (
        <div className="payment">
            <div className="payment__container">
                {/* for delivery address */}
                <h1>Checkout (<Link to="/checkout">{state.basket.length} items </Link>)</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3 style={{ margin: '0px' }}>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p style={{ margin: '0' }}>{state.user.displayName}</p>
                        <p style={{ margin: '0' }}>284 Krishnapuri, 251002</p>
                        <p style={{ margin: '0' }}>Muzaffarnagar, U.P.</p>
                    </div>

                </div>
                {/* for review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3 style={{ margin: '0' }}>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        <FlipMove>
                            {state.basket.map((item, index) => {
                                return <div key={index}> <CheckoutProduct item={item} /> </div>
                            })}
                        </FlipMove>

                    </div>
                </div>
                {/* for payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3 style={{ margin: '0' }}>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
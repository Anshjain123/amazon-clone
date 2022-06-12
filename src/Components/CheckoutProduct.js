import React from 'react'
import './CheckoutProduct.css'
const CheckoutProduct = (props) => {
    const rating = props.item.rating;
    return (
        <div className="checkoutproduct">
            <img src={props.item.image} className='checkoutproduct__image' />
            <div className="checkoutproduct__info">
                <strong className='checkoutproduct__title'>{props.item.title}</strong>
                <strong className='checkoutproduct__price'><small>$</small>{props.item.price}</strong>
                <div className="checkoutproduct__rating">

                    {
                        Array(rating)
                            .fill()
                            .map((_, i) => (
                                <div>⭐</div>
                            ))
                    }

                </div>
                <button>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
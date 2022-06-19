import React, { useContext } from 'react'
import './CheckoutProduct.css'
import StateContext from '../Context/StateContext';
import toast, { Toaster } from 'react-hot-toast';

const CheckoutProduct = (props) => {
    const rating = props.item.rating;
    const { state, dispatch } = useContext(StateContext);
    const removeitem = () => {
        dispatch({
            type: "remove",
            item: {
                id: props.item.id,
                title: props.item.title,
                image: props.item.image,
                price: props.item.price,
                rating: props.item.rating
            }
        })
        toast.success("Item Removed from cart!")
    }
    return (
        <div className="checkoutproduct">
            <Toaster 
                toastOptions={{
                    style:{
                        marginTop:'50px'
                    }
                }}
            />
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
                <button onClick={removeitem}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
import React, {useContext} from 'react'
import './Subtotal.css'
import StateContext from '../Context/StateContext'
import CurrencyFormat from 'react-currency-format'
const Subtotal = () => {
    const {state, getbasketTotal} = useContext(StateContext); 
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <div>
                            Subtotal ({state.basket.length} items): <strong>{value}</strong>
                        </div>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/> This Order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getbasketTotal(state.basket)} 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"} 

            />
            <button
                className='subtotal__button'
            >Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
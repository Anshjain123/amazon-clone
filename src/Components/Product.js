import React, {useContext} from 'react'
import './Product.css'
import StateContext from '../Context/StateContext';
const Product = ({id, title, image, price, rating}) => {
  const {state, dispatch} = useContext(StateContext); 
  const handleaddtocart = ()=>{
    dispatch({
      type:"add",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  }
  return (
      <div className="product">
          <div className="product__info">
              <div className='info'>{title}</div>
              <div className='product__price'>
                  <small>$</small>
                  <strong>{price}</strong>
              </div>
              <div className="product__rating">
                  {
                      Array(rating)
                      .fill()
                      .map((_, i)=>(
                        <div>⭐</div>
                      ))
                  }
              </div> 
          </div>
          <img src={image}/>
        <button onClick={handleaddtocart}>Add to Cart</button>
      </div>
  )
}

export default Product
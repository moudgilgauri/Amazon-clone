import React from 'react'

import "../css/Product.css"
import { useStateValue } from './StateProvider'

export default function Product({ id, title, price, image, rating }) {
    const [state, dispatch] = useStateValue();
    
    const addtoCart = () => {
        
        dispatch({
            type:"ADD_TO_CART",
            item:{
                id:id,
                title:title,
                price:price,
                image:image,
                rating:rating
            }
        })
    }
    
    return (
        <div className="product">
            <div className="product_info">
                <p >{title}</p>
                <p className="product_price"><small>₹</small><strong>{price}</strong></p>
                <div className="product_rating">
                   {Array(rating).fill().map((_,i)=>{
                      return <i className="fas fa-star" style={{color:"gold"}}></i>
                   })}
                    </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addtoCart}>Add to basket</button>
        </div>
    )
}

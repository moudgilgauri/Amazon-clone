import React from 'react'
import "../css/CartProduct.css"
import { useStateValue } from './StateProvider'
export default function CartProduct({id,title,image,price,rating}) {
    const [{cart},dispatch]= useStateValue();
    const removefromcart =()=>{
        //dispatch the action into data layer
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }
    return (
        <div className="cartproduct">
            <img src={image} alt="" className="cartproduct_image" />
            <div className="cartproduct_info">
        <p className="cartproduct_title">{title}</p>
        <p className="cartproduct_price">
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className="cartproduct_rating">
            {Array(rating).fill().map((_,i)=>(
               <i className="fas fa-star" style={{color:"gold"}}></i>
            ))}
        </div>
        <button onClick={removefromcart}>Remove from Cart</button>
            </div>
            
        </div>
    )
}

import React from 'react'
import { Link } from "react-router-dom";
import "../css/Product.css"
import { useStateValue } from './StateProvider'

export default function Product({ id, title, price, image, rating }) {
    const [state, dispatch] = useStateValue();
    
    const addtoFull = () => {
        
        dispatch({
            type:"ADD_TO_FULL",
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
                <Link to="/fullProduct" className="product_title" onClick={addtoFull} ><p >{title}</p></Link>
                <p className="product_price"><small>₹</small><strong>{price}</strong></p>
                <div className="product_rating">
                   {Array(rating).fill().map((_,i)=>{
                      return <i className="fas fa-star" style={{color:"gold"}}></i>
                   })}
                    </div>
            </div>
            <img src={image} alt="" />
        </div>
    )
}

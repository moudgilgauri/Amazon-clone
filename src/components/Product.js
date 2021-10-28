import React from 'react'

import "../css/Product.css"
export default function Product({id,title,price,image,rating}) {
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
            <button>Add to basket</button>
        </div>
    )
}

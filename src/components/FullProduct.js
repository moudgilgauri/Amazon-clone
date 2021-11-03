import React from 'react'
import "../css/FullProduct.css";
import replacemnet from "../images/replacement.png";
import delivery from "../images/delivery.png";
import delivery2 from "../images/delivery2.png";
import warranty from "../images/warranty.png";
import { useStateValue } from './StateProvider'
export default function FullProduct({id,title,image,price,rating}) {
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
        <div className="fullproduct">
            <img src={image} alt="" className="fullproduct_image" />
            <div className="fullproduct_info">
        <p className="fullproduct_title">{title}</p>
        <div className="fullproduct_rating">
            {Array(rating).fill().map((_,i)=>(
               <i className="fas fa-star" style={{color:"gold"}}></i>
            ))}
        </div>
        <div className="fullproduct_price">
            <div>
                <span style={{color:"#565959"}}>MRP </span> : &nbsp;
                <small style={{color:"#565959"}}>₹</small>
                <span style={{color:"#565959"}}><strike>{price}</strike></span>
            </div>
            <div>
                <span style={{color:"#565959"}}>Price </span> : &nbsp;
                <small style={{color:"#B12704"}}>₹</small>
                <strong style={{color:"#B12704"}}>{Math.floor(price*0.8)}</strong>
            </div>
            <div>
                <span style={{color:"#565959"}}>You Save Up to </span> : &nbsp;
                <small style={{color:"#B12704"}}>₹</small>
                <span style={{color:"#B12704"}}>{Math.floor(price*0.2)} (2%)</span>
            </div>
        </div>
        
        <div className="detail_container">
            <div className="details">
                <img src={replacemnet} alt="" />
                <p>7 Days</p>
                <p>Replacements</p>
            </div>
            <div className="details">
                <img src={delivery} alt="" />
                <p>Amazon</p>
                <p>Delivered</p>
            </div>
            <div className="details">
                <img src={warranty} alt="" />
                <p>1 year Warranty</p>
            </div>
            <div className="details">
                <img src={delivery2} alt="" />
                <p>No-Contact</p>
                <p>Delivery</p>
            </div>
        </div>
            </div>
            <div className="fullproduct_card">
            <strong className="full_check card_header">
               <input type="checkbox" /> With Exchange Save Upto: <span style={{color:"#B12704",fontWeight:"bold"}}>₹{Math.floor(price*0.4)}</span>
           </strong>
            <strong className="full_check card_title">
               <input type="checkbox" /> This order contains a gift
           </strong>
          
            
            <p className="full_check"><strong>Add a Plan:</strong></p>
            <strong className="full_check full_waranty">
               <input type="checkbox" /> 2 year Extended Waranty Plan
           </strong>
           <strong className="full_check full_waranty" style={{marginBottom:"30px"}}>
               <input type="checkbox" /> 1 year Extended Waranty Plan
           </strong>
            <div className="button_card">
                <button className="add" onClick={addtoCart}>Add to Cart</button>
                <button className="buy">Buy Now</button>
            </div>
            </div>
           
            
        </div>
    )
}

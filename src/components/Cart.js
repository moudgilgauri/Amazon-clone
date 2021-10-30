import React from 'react'
import ad from "../images/Ad-banner3.jpg"
import "../css/Cart.css"
import Subtotal from './Subtotal'
export default function Cart() {
    return (
        <div className="cart">
            <div className="cart_left">
                <img src={ad} alt="" className="cart_left_img" />
                <div className="cart_title"><h2>Your Shopping Cart</h2></div>
            </div>
            <div className="cart_right">
                <Subtotal/>
            </div>
        </div>
    )
}

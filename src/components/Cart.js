import React from 'react'
import ad from "../images/Ad-banner3.jpg"
import "../css/Cart.css"
import Subtotal from './Subtotal'
import CartProduct from './CartProduct'
import { useStateValue } from './StateProvider'
export default function Cart() {
    const [{cart}] = useStateValue();
    return (
        <div className="cart">
            <div className="cart_left">
                <img src={ad} alt="" className="cart_left_img" />
                <div ><h2 className="cart_title">Your Shopping Cart</h2>
                {cart.map(item=>(
                    <CartProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />
                ))}
                </div>
            </div>
            <div className="cart_right">
                <Subtotal/>
            </div>
        </div>
    )
}

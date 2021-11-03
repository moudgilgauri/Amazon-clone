import React from 'react'
import "../css/Subtotal.css"
import { useStateValue } from './StateProvider'
import { getCartTotal } from './Reducer';
export default function Subtotal() {
    const [{cart}] = useStateValue();
    return (
        <div className="subtotal">
           <p style={{marginTop:"-10px"}}><strong>Subtotal ({cart?.length} items)</strong>:
           <strong>₹{getCartTotal(cart)}</strong>
           </p>
           <small className="subtotal_gift">
               <input type="checkbox" /> This order contains a gift
           </small>
           <button>Proceed to Cheackout</button>
        </div>
    )
}

import React from 'react'
import "../css/Subtotal.css"
export default function Subtotal() {
    return (
        <div className="subtotal">
           <p style={{marginTop:"-10px"}}><strong>Subtotal ({0} items)</strong>:
           <strong>{0}</strong>
           </p>
           <small className="subtotal_gift">
               <input type="checkbox" /> This order contains a gift
           </small>
           <button>Proceed to Cheackout</button>
        </div>
    )
}

import React from 'react'
import FullProduct from './FullProduct';
import { useStateValue } from './StateProvider'
export default function Full() {
    const [{full}] = useStateValue();
    return (
        <div className="full">
            
                <div ><h2 className="full_title">Your Item</h2>
                {full.map(item=>(
                    <FullProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    image={item.image}
                    />
                ))}
                </div>
            
            
        </div>
    )
}

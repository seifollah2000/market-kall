import React, { useState } from 'react'
import './BoxProduct.css'
export default function BoxProduct() {
    const [count, setCount] = useState(1)
    const price = 14350000 * count

    const minCount = () => {
        if (count !== 1) {
            setCount(prev => prev - 1)
        }
    }
    return (
        <div className="product__property-left col-6">
            <ul className='product__property-left-items'>
                <li className='product__property-left-item'>
                    <span>فروشنده:</span>
                    <span className='product__property-left-item-sale'>کالامارکت</span>
                </li>
                <li className='product__property-left-item'>
                    <span>گارانتی:</span>
                    <span className='product__property-left-item-suport'>۱۸ ماهه کالامارکت</span>
                </li>
                <li className='product__property-left-item'>
                    <span>قیمت:</span>
                    <span class="product__property-left-item-price">
                        {price.toLocaleString()}
                        <span>تومان</span>
                    </span>
                </li>
                <li className='product__property-left-item'>
                    <span>تعداد:</span>
                    <div className="product__property-left-item-count">
                        <button className='product__property-left-item-count-add' onClick={() => setCount(prev => prev + 1)}>+</button>
                        <span>{count}</span>
                        <button className='product__property-left-item-count-min' onClick={() => minCount()}>-</button>

                    </div>
                </li>

            </ul>
            <button className='product__property-left-item-addCart'>افزودن به سبد خرید</button>
        </div>
    )
}

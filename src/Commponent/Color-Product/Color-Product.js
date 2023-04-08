import React, { useState } from 'react'
import './Color-Product.css'
export default function ColorProduct() {
    const [colors, setColors] = useState('one')
    return (
        <>
            <span className='product__property-right-colors-title'>رنگ بندی: </span>
            <div className="product__property-right-colors-thems d-flex align-items-center">
                <div onClick={() => setColors('one')} className={`product__property-right-color-them color-one ${colors === 'one' && 'product__property-right-color-them-active'}`}></div>
                <div onClick={() => setColors('two')} className={`product__property-right-color-them ${colors === 'two' && 'product__property-right-color-them-active'}`}></div>
                <div onClick={() => setColors('three')} className={`product__property-right-color-them  color-three ${colors === 'three' && 'product__property-right-color-them-active'}`} ></div>

            </div>
        </>
    )
}

import React, { useState } from 'react'
import './Accordion-Product.css'
export default function AccordionProduct({ title, children }) {
    const [shown, setShown] = useState(false)
    return (
        <div className='accordion__product-item py-3 d-flex align-items-center  '>
            <div className='accordion__product-head w-100'>
                <span className='accordion__product-head-btn' onClick={() => setShown(prev => !prev)}>{shown ? "-" : "+"}</span>
                <span className='accordion__product-head-title'>{title}</span>
            </div>

            <div className={`accordion__product-body pe-5 m-4 ${shown && "accordion__product-body-shown"}`} >
                {children}
            </div>

        </div>
    )
}

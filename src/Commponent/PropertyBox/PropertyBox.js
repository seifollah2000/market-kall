import React, { Children } from 'react'
import './PropertyBox.css'
export default function PropertyBox({ children, title, text }) {
    return (
        <div className='propertyBox__item py-3 py-md-2'>
            <div className='propertyBox__item-ritgh'>
                {children}
            </div>
            <div className="propertyBox__item-left">
                <h6 className='propertyBox__item-left-title'>{title}</h6>
                <h6 className='propertyBox__item-left-text'>{text}</h6>
            </div>
        </div>
    )
}

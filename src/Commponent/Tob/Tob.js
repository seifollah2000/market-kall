import React from 'react'
import './Tob.css'
export default function Tob({ title, children }) {
    return (
        <div className='tob-item'>
            {children}
            <span>{title}</span>
        </div>
    )
}

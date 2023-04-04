import React from 'react'
import './FastAccessBox.css'

export default function FastAccessBox({ children, title }) {
    return (
        <div className='FastAccess__box'>
            <div className="FastAccess__box-head">
                {title}
            </div>
            <div className="FastAccess__box-body">
                {children}
            </div>
        </div>
    )
}

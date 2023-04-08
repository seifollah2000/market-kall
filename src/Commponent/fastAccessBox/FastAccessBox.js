import React from 'react'
import './FastAccessBox.css'

export default function FastAccessBox({ children, title }) {
    return (
        <div className='FastAccess__box  col-4 text-center py-3 py-sm-0'>
            <div className="FastAccess__box-head">
                {title}
            </div>
            <div className="FastAccess__box-body">
                {children}
            </div>
        </div>
    )
}

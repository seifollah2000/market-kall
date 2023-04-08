import React from 'react'
import './Gallery-actions.css'
export default function GalleryActions({ children, title }) {
    return (
        <a href='#' className='gallery__action'>
            <div className="gallery__action-icon">

                {children}
            </div>
            <h5 className='gallery__action-title'>{title}</h5>
        </a>
    )
}

import React from 'react'
import './Points-Product.css'
export default function PointsProduct({ title, mode }) {
    return (
        <div className="PointsProduct_item d-flex align-items-center ">
            <span className={`${mode ? "good_points" : 'bad_points'}`}>{mode ? "+" : "-"}</span>
            <span className='PointsProduct_item-title'>{title}</span>
        </div>
    )
}

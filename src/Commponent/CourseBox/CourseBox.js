import React, { useRef } from 'react'
import './CourseBox.css'
export default function CourseBox({ title, price, priceOrginal, cover, children }) {
    const iconHeart = useRef()
    const addPopular = () => {
        iconHeart.current.classList.toggle("popular_red")
    }
    return (
        <div className='productBox'>
            <div className="productBox__img">
                <img src={cover} alt="kala market" />
            </div>
            {children}
            <div className="productBox__title">
                <span>{title}</span>
            </div>
            <div className="productBox__allPrice py-3">
                <span>{(+priceOrginal).toLocaleString()}تومان</span>
            </div>
            <div className="ProductBox__price pb-4">
                <span>{(+price).toLocaleString()}تومان</span>
            </div>
            <div className='modal__box'>
                <div className='modal__eye'>
                    <div>
                        <i className="fa-regular fa-eye"></i>
                    </div>
                </div>
                <div className='d-flex align-items-end justify-content-center modal-icon-product'>
                    <div onClick={addPopular} ref={iconHeart} ><i className="fa-regular fa-heart" ></i></div>
                    <div className='modal__icon-random'><i className='fas fa-random'></i></div>
                    <div className='modal__icon-cart'><i className='fas fa-shopping-cart'></i></div>
                </div>
            </div>
        </div>
    )
}

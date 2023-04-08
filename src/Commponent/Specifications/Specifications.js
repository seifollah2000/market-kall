import React from 'react'
import './Specifications.css'
export default function Specifications() {
    return (
        <ul className='product__specifications-items'>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >ابعاد</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >7.9 × 71.8 × 151 میلی‌متر</span>
                </div>
            </li>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >توضیحات سیم کارت</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >سایز نانو (8.8 × 12.3 میلی‌متر)</span>
                </div>
            </li>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >وزن</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >168 گرم</span>
                </div>
            </li>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >ساختار بدنه</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >فلز و شیشه (محافظ گوریلا گلس روی قاب پشتی و جلویی + قاب فولادی)</span>
                </div>
            </li>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >تراشه</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >Exynos 9825 (7 nm) Chipset</span>
                </div>
            </li>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >نوع پردازنده</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >64 بیت</span>
                </div>
            </li>

            <li className='product__specifications-item'>
                <div className='product__specifications-item-title'>
                    <span >فرکانس پردازنده‌ی مرکزی</span>
                </div>
                <div className="product__specifications-item-text">
                    <span >2.73, 2.4 و 1.9 گیگاهرتز</span>
                </div>
            </li>
        </ul>
    )
}

import React from 'react'
import './BredCram.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'
export default function BredCram() {
    return (
        <div className='bredcram'>
            <div className="bredcram__home">
                <AiTwotoneHome /> خانه
            </div>
            <IoIosArrowBack />
            <div className='bredcram__item'>
                <a href="#">کالای دیجیتال</a>
            </div>
            <IoIosArrowBack />
            <div className='bredcram__item'>
                <a href="#">موبایل</a>
            </div>
            <IoIosArrowBack />
            <div className="bredcram__item">
                <span>گوشی موبایل سامسونگ مدل Galaxy Note 10 SM-N970F/DS دو سیم‌کارت ظرفیت 256 گیگابایت</span>
            </div>
        </div>
    )
}

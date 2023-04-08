import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './IncludingItem.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
export default function IncludingItem({ children, title }) {
    let product = (children)
    return (
        <div>
            <div className='IncludingItem_title'>
                <h6>{title}</h6>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >

                {children}


            </Swiper>
        </div>
    )
}

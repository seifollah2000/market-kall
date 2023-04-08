import React, { useState, useRef } from 'react'
import './ShownProduct-Img.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

export default function ShownProductImg() {
    const [show, setShow] = useState('/img/product-info/product-img-note10-big-1.jpg')
    const imgZoom = useRef()
    const tagImg = useRef()

    const zoomPhotoHandler = (eve) => {

        let offsetLefts = (imgZoom.current.offsetWidth)
        console.log()
        let posX = ((eve.pageX * 5) - (tagImg.current.offsetLeft * 5.5)) / imgZoom.current.offsetWidth.toFixed(3) * 100
        let posY = ((eve.pageY * 5) - (tagImg.current.offsetTop * 5.5)) / imgZoom.current.offsetHeight.toFixed(3) * 100

        imgZoom.current.style = `transform-origin:${posX}px ${posY}px`
    }

    const clikhandler = (eve) => {
        setShow(eve.target.currentSrc)
    }
    return (
        <>
            <div className="product__info-body-rigth-img-shown" ref={tagImg}>

                <div className="product__info-body-rigth-img-shown-orginal" onMouseMove={(event) => zoomPhotoHandler(event)}>
                    <img src={show} alt="kala market" />
                </div>
                <div className="product__info-body-rigth-img-shown-zoom" >

                    <img src={show} alt="kalamarket" ref={imgZoom} />


                </div>
                <div className="product__info-body-rigth-img-shown-items">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={false}
                        navigation={true}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img onClick={clikhandler} className='product__info-body-rigth-img-shown-items' src="/img/product-info/product-img-note10-big-1.jpg" alt="kala market" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={clikhandler} className='product__info-body-rigth-img-shown-items' src="/img/product-info/product-img-note10-big-2.jpg" alt="kala market" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={clikhandler} className='product__info-body-rigth-img-shown-items' src="/img/product-info/product-img-note10-big-3.jpg" alt="kala market" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={clikhandler} className='product__info-body-rigth-img-shown-items' src="/img/product-info/product-img-note10-big-4.jpg" alt="kala market" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img onClick={clikhandler} className='product__info-body-rigth-img-shown-items' src="/img/product-info/product-img-note10-big-5.jpg" alt="kala market" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

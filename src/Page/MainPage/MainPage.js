import React from 'react'
import './MainPage.css'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function MainPage() {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='landing_slider'>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4400,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div class="carousel-item carousel-item-h4 active">
                                <img src='/img/landing/samsung_galaxy_note_20-ultra.jpg' />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h3>
                                    <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
                                    <button type="submit" class="btn btn-warning btn-buy mt-4">خرید کنید</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="carousel-item carousel-item-h4 active">
                                <img src='/img/landing/iphone-12.png' />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h3>
                                    <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
                                    <button type="submit" class="btn btn-warning btn-buy mt-4">خرید کنید</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="carousel-item carousel-item-h4 active">
                                <img src='/img/landing/Huawei-P20-Pro.jpg' />
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h3>
                                    <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
                                    <button type="submit" class="btn btn-warning btn-buy mt-4">خرید کنید</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <Footer />
        </>
    )
}

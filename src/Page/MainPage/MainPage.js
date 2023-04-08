import React, { useEffect } from 'react'
import './MainPage.css'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import PercentTimer from '../../Commponent/precentTimer/PercentTimer'
import { Swiper, SwiperSlide } from "swiper/react";
import IncludingItem from '../../Commponent/IncludingItem/IncludingItem';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
import CourseBox from '../../Commponent/CourseBox/CourseBox';

export default function MainPage() {

    return (
        <>
            <Header />
            <div className='main-page container '>
                <div className='landing_slider py-3'>

                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4400,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="carousel-item carousel-item-h4 active">
                                <img src='/img/landing/samsung_galaxy_note_20-ultra.jpg' />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h3>
                                    <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
                                    <button type="submit" className="btn btn-warning btn-buy text-white mt-4">خرید کنید</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item carousel-item-h4 active">
                                <img src='/img/landing/iphone-12.png' />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h3>
                                    <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
                                    <button type="submit" className="btn btn-warning btn-buy text-white  mt-4">خرید کنید</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="carousel-item carousel-item-h4 active">
                                <img src='/img/landing/Huawei-P20-Pro.jpg' />
                                <div className="carousel-caption d-none d-md-block">
                                    <h3>سامسونگ گلگسی نوت 20 آلترا - 512 گیگابایت</h3>
                                    <p>Sumsung Galaxy Note 20 Ultra - 512GB - Dual SIM</p>
                                    <button type="submit" className="btn btn-warning btn-buy text-white mt-4">خرید کنید</button>
                                </div>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className='slider__footer'>
                    <a href="#">
                        <img className='img-fluid' src="/img/a-8.jpg" alt="kala market" />
                    </a>
                </div>
                <div className='product__allMain mt-3'>
                    <IncludingItem title="پیشنهادی های ما">
                        <SwiperSlide> <CourseBox title=" دوربین دیجیتال سامسونگ مدل ST150F" price="2500000" priceOrginal="3200000" cover="/img/popular/camera-samsung.jpg" /></SwiperSlide>
                        <SwiperSlide>  <CourseBox title=" اجاق گاز طرح فر لوپز مدل 10000S" price="10500000" priceOrginal="12000000" cover="/img/popular/Stove-lopez.jpg" /></SwiperSlide>
                        <SwiperSlide> <CourseBox title=" لپ تاپ چووی الترابوک 14 اینچ پرو" price="2500000" priceOrginal="3200000" cover="/img/popular/SL1200_-300x300.jpg" /></SwiperSlide>
                        <SwiperSlide>  <CourseBox title=" اسپرسوساز مباشی مدل ECM2013" price="2000000" priceOrginal="3500000" cover="/img/popular/ECM2013.jpg" /></SwiperSlide>
                        <SwiperSlide> <CourseBox title="سامسونگ گلکسی اس 10 پلاس – 128 گیگابایت – دو سیم کارت" price="10500000" priceOrginal="11990000" cover="/img/popular/Samsung-S10Plus.jpg" /></SwiperSlide>
                    </IncludingItem>
                </div>
                <div className='percent row mt-3'>
                    <div className='precent__img col-12 col-md-3'>
                        <img src="https://theme-persian.ir/kalamarket/demo/template/assets/images/slider-amazing/shopping-cart.svg" alt="" />
                        <h6>محصولات شگفت انگیز</h6>
                        <button>مشاهده همه</button>
                    </div>
                    <div className="col-12 col-md-9  precent__products">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}

                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <CourseBox title=" اجاق گاز طرح فر لوپز مدل 10000S" price="2500000" priceOrginal="3200000" cover="/img/popular/camera-samsung.jpg" >
                                    <PercentTimer />
                                </CourseBox>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox title=" آون توستر سان ورد مدل SWF-40R" price="2500000" priceOrginal="3200000" cover="/img/percent/DNR 290T-366T.jpg" >
                                    <PercentTimer />

                                </CourseBox>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox title="   یخچال و فریزر دو قلوی دونار مدل DNR 290T-366T" price="2500000" priceOrginal="3200000" cover="/img/percent/Avocado.jpg" >
                                    <PercentTimer />

                                </CourseBox>
                            </SwiperSlide>
                            <SwiperSlide>
                                <CourseBox title=" یخچال و فریزر دو قلوی دونار مدل DNR 290T-366T" price="2500000" priceOrginal="3200000" cover="/img/percent/SWF-40R.jpg" >
                                    <PercentTimer />

                                </CourseBox>
                            </SwiperSlide>

                            <SwiperSlide>
                                <CourseBox title=" یخچال و فریزر دو قلوی دونار مدل DNR 290T-366T" price="2500000" priceOrginal="3200000" cover="/img/popular/Stove-lopez.jpg" >
                                    <PercentTimer />

                                </CourseBox>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                <div className="percent_box d-flex mt-3">
                    <div className="percent_item col-lg-3 col-sm-5 text-center py-3 ">
                        <img src="/img/percent/a-4.jpg" className='img-fluid' alt="kala market" />
                    </div>
                    <div className="percent_item col-lg-3 col-sm-5 text-center py-3 ">
                        <img src="/img/percent/a-5.jpg" className='img-fluid' alt="kala market" />
                    </div>
                    <div className="percent_item col-lg-3 col-sm-5 text-center py-3 ">
                        <img src="/img/percent/a-6.jpg" className='img-fluid' alt="kala market" />
                    </div>
                    <div className="percent_item col-lg-3 col-sm-5 text-center py-3 ">
                        <img src="/img/percent/a-7.jpg" className='img-fluid' alt="kala market" />
                    </div>
                </div>
                <div className='product_pc-home mt-3 product__allMain'>
                    <IncludingItem title="لوازم خانگی">
                        <SwiperSlide> <CourseBox title=" دوربین دیجیتال سامسونگ مدل ST150F" price="2500000" priceOrginal="3200000" cover="/img/popular/camera-samsung.jpg" /></SwiperSlide>
                        <SwiperSlide>  <CourseBox title=" اجاق گاز طرح فر لوپز مدل 10000S" price="10500000" priceOrginal="12000000" cover="/img/popular/Stove-lopez.jpg" /></SwiperSlide>
                        <SwiperSlide> <CourseBox title=" لپ تاپ چووی الترابوک 14 اینچ پرو" price="2500000" priceOrginal="3200000" cover="/img/popular/SL1200_-300x300.jpg" /></SwiperSlide>
                        <SwiperSlide>  <CourseBox title=" اسپرسوساز مباشی مدل ECM2013" price="2000000" priceOrginal="3500000" cover="/img/popular/ECM2013.jpg" /></SwiperSlide>
                        <SwiperSlide> <CourseBox title="سامسونگ گلکسی اس 10 پلاس – 128 گیگابایت – دو سیم کارت" price="10500000" priceOrginal="11990000" cover="/img/popular/Samsung-S10Plus.jpg" /></SwiperSlide>
                    </IncludingItem>
                    <div className='slider__footer my-5'>
                        <img className='img-fluid' src="/img/percent/a-12.jpg" alt="kala market" />
                    </div>
                    <IncludingItem title="کامپبوتر و لپ تاپ">
                        <SwiperSlide> <CourseBox title=" دوربین دیجیتال سامسونگ مدل ST150F" price="2500000" priceOrginal="3200000" cover="/img/popular/camera-samsung.jpg" /></SwiperSlide>
                        <SwiperSlide>  <CourseBox title=" اجاق گاز طرح فر لوپز مدل 10000S" price="10500000" priceOrginal="12000000" cover="/img/popular/Stove-lopez.jpg" /></SwiperSlide>
                        <SwiperSlide> <CourseBox title=" لپ تاپ چووی الترابوک 14 اینچ پرو" price="2500000" priceOrginal="3200000" cover="/img/popular/SL1200_-300x300.jpg" /></SwiperSlide>
                        <SwiperSlide>  <CourseBox title=" اسپرسوساز مباشی مدل ECM2013" price="2000000" priceOrginal="3500000" cover="/img/popular/ECM2013.jpg" /></SwiperSlide>
                        <SwiperSlide> <CourseBox title="سامسونگ گلکسی اس 10 پلاس – 128 گیگابایت – دو سیم کارت" price="10500000" priceOrginal="11990000" cover="/img/popular/Samsung-S10Plus.jpg" /></SwiperSlide>
                    </IncludingItem>
                </div>
                <div className="buy_precent row my-3">
                    <div className="buy_precent-right col-md-6 py-3">
                        <div>

                            <div className="buy_precent-right-img">
                                <img className='w-100' src="/img/footer/Photography-Camera-HD-Wallpaper2.jpg" alt="kalamarket" />
                            </div>
                            <div className="buy_precent-right-des">
                                <h6 className='buy_precent-right-des-title'>خرید دوربین و دوربین مدار بسته</h6>
                                <h6 className='buy_precent-right-des-text'>خرید دوربین با ارزان ترین قیمت های بازار و تخفیف ویژه از سایت</h6>
                                <button className='buy_precent-right-des-btn'> مشاهد همه</button>
                            </div>
                        </div>
                    </div>
                    <div className="buy_precent-left col-md-6 py-3">
                        <div>

                            <div className="buy_precent-left-img">
                                <img className='w-100' src="/img/footer/Photography-Camera-HD-Wallpaper2.jpg" alt="kalamarket" />
                            </div>
                            <div className="buy_precent-left-des">
                                <h6 className='buy_precent-left-des-title'>خرید تبلت و انواع گوشی موبایل</h6>
                                <h6 className='buy_precent-left-des-text'>خرید تبلت با ارزان ترین قیمت های بازار و تخفیف ویژه از سایت</h6>
                                <button className='buy_precent-left-des-btn'> مشاهده همه</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

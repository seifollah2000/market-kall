import React from 'react'
import './Footer.css'
import PropertyBox from '../PropertyBox/PropertyBox'
import FastAccessBox from '../fastAccessBox/FastAccessBox'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper"

import { FaHeadset } from 'react-icons/fa'
import { AiOutlineShop } from 'react-icons/ai'
import { MdEventRepeat } from 'react-icons/md'
import { IoCloudDoneSharp } from 'react-icons/io5'
import Input from '../CourseBox/Input/Input'
export default function Footer() {
    return (
        <footer className='m-1 m-sm-5 p-1 p-sm-3 footer'>
            <div className="propertyMy">
                <PropertyBox title="تحویل اکسپرس" text="در کمترین زمان دریافت کنید">
                    <i class="fa-sharp fa-solid fa-truck-fast"></i>
                </PropertyBox>

                <PropertyBox title="پشتیبانی ۲۴ ساعته" text="پشتیبانی هفت روز هفته">
                    <FaHeadset />
                </PropertyBox>
                <PropertyBox title="پرداخت در محل" text="هنگام دریافت پرداخت کنید">
                    <AiOutlineShop />
                </PropertyBox>
                <PropertyBox title="۷ روز ضمانت بازگشت" text="هفت روز مهلت دارید">
                    <MdEventRepeat />
                </PropertyBox>
                <PropertyBox title="ضمانت اصل‌بودن کالا" text="تایید اصالت کالا">
                    <IoCloudDoneSharp />
                </PropertyBox>

            </div>
            <div className="fastAccess py-3">
                <div className="fastAccess__rigth col-12 col-lg-6">
                    <FastAccessBox title="با کالامارکت ">
                        <a href='#'>اتاق خبر کالامارکت</a>
                        <a href='#'>فروش در کالامارکت</a>
                        <a href="#">همکاری با سازمان‌ها</a>
                        <a href="#">فرصت‌های شغلی</a>
                    </FastAccessBox>
                    <FastAccessBox title="خدمات مشتریان">
                        <a href="#">پاسخ به پرسش‌های متداول</a>
                        <a href="#">رویه‌های بازگرداندن کالا</a>
                        <a href="#">شرایط استفاده</a>
                        <a href="#">حریم خصوصی</a>
                    </FastAccessBox>
                    <FastAccessBox title="راهنمای خرید از کالامارکت">
                        <a href="#">نحوه ثبت سفارش</a>
                        <a href="#">رویه ارسال سفارش</a>
                        <a href="#">شیوه‌های پرداخت</a>
                    </FastAccessBox>

                </div>
                <div className="fastAccess__left col-12 col-lg-4 py-3 py-lg-0">
                    <h6 className='fastAccess__left-title text-center'>با عضویت در خبرنامه از آخرین اخبار و محصولات سایت مطلع شوید...</h6>
                    <div className="fastAccess__left-body text-center d-flex justify-content-center">

                        <Input type="text" text="آدرس ایمیل خود را وارد کنید" />
                        <button className='fastAccess__left-btn'>ارسال</button>
                    </div>
                </div>
            </div>
            <div className='information d-flex my-4'>
                <div className="information__text col-12 col-sm-9">
                    <h6>فروشگاه اینترنتی کالامارکت</h6>
                    <p>کالامارکت به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از یک دهه تجربه، با پایبندی به سه اصل کلیدی، پرداخت در
                        محل، 7 روز ضمانت بازگشت کالا و تضمین اصل‌بودن کالا، موفق شده تا همگام با فروشگاه‌های معتبر جهان،
                        به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض ورود به کالامارکت با یک سایت پر
                        از کالا رو به رو می‌شوید! هر آنچه که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.</p>
                </div>
                <div className='information__berand col-12 col-sm-2 py-3 py-md-0'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}

                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={false}

                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="/img/laicens/L-1.png" alt="berand" /></SwiperSlide>
                        <SwiperSlide><img src="/img/laicens/L-2.png" alt="" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className='footer__end text-center'>
                تمامی مطالب، عکس ها و... متعلق به سایت فروشگاهی کالامارکت می باشد.
            </div>
        </footer>
    )
}

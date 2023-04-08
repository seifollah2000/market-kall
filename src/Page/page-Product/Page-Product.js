import React from 'react'
import './page-Product.css'
import BredCram from '../../Commponent/BredCram/BredCram'
import Header from '../../Commponent/Header/Header'
import Footer from '../../Commponent/Footer/Footer'
import GalleryActions from '../../Commponent/Gallery-actions/Gallery-actions'
import ColorProduct from '../../Commponent/Color-Product/Color-Product'
import { FaHeart } from 'react-icons/fa'
import { BsFillShareFill } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io'
import { MdMore } from 'react-icons/md'
import { MdOutlineCompare } from 'react-icons/md'
import ShownProductImg from '../../Commponent/ShownProduct-Img/ShownProduct-Img'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaSitemap } from 'react-icons/fa'
import { GiConcentrationOrb } from 'react-icons/gi'
import { BsFillTagsFill } from 'react-icons/bs'
import BoxProduct from '../../Commponent/BoxProduct/BoxProduct'
import PropertyBox from '../../Commponent/PropertyBox/PropertyBox'

export default function PageProduct() {
    return (
        <>
            <Header />
            <div className="product__info container">

                <BredCram />
                <div className="product__info-body">
                    <div className="gallery-actions">
                        <GalleryActions title="محبوب">
                            <FaHeart />
                        </GalleryActions>

                        <GalleryActions title="اشتراک">
                            <BsFillShareFill />
                        </GalleryActions>

                        <GalleryActions title="اطلاع‌رسانی">
                            <IoIosNotifications />
                        </GalleryActions>

                        <GalleryActions title="نمایش بیشتر">
                            <MdMore />
                        </GalleryActions>
                        <GalleryActions title="مقایسه">
                            <MdOutlineCompare />
                        </GalleryActions>
                    </div>
                    <div className="product__info-informaition">
                        <div className="product__info-body-rigth col-md-5">
                            <ShownProductImg />
                        </div>
                        <div className="product__info-body-left  col-md-7">
                            <div className="product__info-body-left-title d-flex align-items-center justify-content-between">
                                <span className="product__left-text text-dark">سامسونگ مدل Galaxy Note 10 SM-N970F/DS دو سیم‌کارت ظرفیت 256 گیگابایت</span>
                                <span className='product__left-sale text-success'>12 فروش موفق</span>
                            </div>
                            <div className="product__textEN d-flex align-items-center">
                                <span>Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</span>
                                <div className="product__textEN-star">
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />

                                </div>
                            </div>
                            <ul className="product__address d-flex align-items-center">
                                <li className="product__address-item d-flex align-items-center">

                                    <div className="product__address-icon">
                                        <FaSitemap />
                                    </div>
                                    <span className='product__address-dasteh'>دسته :</span>
                                    <a href="#" className='product__address-link'>
                                        کالای دیجیتال
                                    </a>
                                    ,
                                    <a href="#" className='product__address-link'>موبایل</a>
                                </li>
                                <li className="product__address-item  d-flex align-items-center">
                                    <div className="product__address-icon">
                                        <BsFillTagsFill />
                                    </div>
                                    <span className='product__address-dasteh'>برچسب:  </span>
                                    <a href="#" >سامسونگ</a>

                                </li>
                                <li className="product__address-item  d-flex align-items-center">
                                    <div className="product__address-icon">
                                        <GiConcentrationOrb />
                                    </div>
                                    <span className='product__address-dasteh'> برند:</span>
                                    <a href="#">سامسونگ</a>
                                </li>
                            </ul>
                            <div className="product__property d-flex pt-3">
                                <div className="product__property-right col-6">
                                    <div className="product__property-right-colors  d-flex align-items-center">
                                        <ColorProduct />
                                    </div>
                                    <div className="product__property-right-inform">
                                        <h6 className='product__property-right-inform-title'>ویژگی‌های محصول</h6>
                                        <ul className='product__property-right-inform-items'>
                                            <li className='product__property-right-inform-item'>
                                                <h6>سیستم عامل: <span>Android13</span></h6>
                                            </li>
                                            <li className='product__property-right-inform-item'>
                                                <h6>شبکه های ارتباطی: <span>2G، 3G، 4G</span></h6>
                                            </li>
                                            <li className='product__property-right-inform-item'>
                                                <h6>  رم: <span> 8 گیگابایت</span></h6>
                                            </li>
                                            <li className='product__property-right-inform-item'>
                                                <h6>ویژگی‌های خاص: <p>مقاوم در برابر آب دارای بدنه مقاوم فبلت مجهز به حس‌گر اثرانگشت مناسب عکاسی سلفی مناسب بازی دارای قلم</p></h6>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="product__property-right-sale-less d-flex align-items-center">
                                        <h6 className='product__property-right-sale-less-title'>آیا قیمت مناسب‌تری سراغ دارید؟</h6>
                                        <div className="product__property-right-sale-less-btn d-flex align-items-center">
                                            <button>بلی</button>
                                            <button>خیر</button>
                                        </div>
                                    </div>
                                </div>
                                <BoxProduct />
                            </div>
                        </div>
                    </div>
                    <div className="product__info-footer">
                        <PropertyBox title='امکان تحویل' text='اکسپرس'>

                        </PropertyBox>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

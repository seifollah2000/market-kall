import React, { useRef } from 'react'
import './Header.css'
import FilterSearch from '../../FilterSearch/FilterSearch'

export default function Header() {
    const resultSearch = useRef()
    const resultSearchMobile = useRef()
    const menuPhone = useRef()

    const shownHandlerSearch = () => {
        resultSearch.current.classList.add('header__shown-search')
    }
    const shownHandlerSearchMobile = () => {
        resultSearchMobile.current.classList.add('header__shown-search')

    }

    const unShownHandlerSearchMobile = () => {
        resultSearchMobile.current.classList.remove('header__shown-search')

    }
    const unShownHandlerSearch = () => {
        resultSearch.current.classList.remove('header__shown-search')
    }
    const shownMenu = () => {
        menuPhone.current.classList.remove('closeMenu')
        menuPhone.current.classList.add('shownMenu')


    }
    const moveMenu = (e) => {

        menuPhone.current.classList.remove('shownMenu')
        menuPhone.current.classList.add('closeMenu')

        console.log('close menu')
    }
    return (


        <header className="header-main px-4">
            <div className="d-block w-100">
                <section className="h-main-row w-100 py-3 d-flex">
                    <div className="col-9 col-md-9 col-xs-12 pr">
                        <div className="header-right d-flex">
                            <div className="col-lg-3 pr">
                                <div className="header-logo row text-right">
                                    <a href="#">
                                        <img src="/img/logo/logo.png" alt="کالامارکت" />
                                    </a>
                                </div>
                            </div>
                            <div className="search_box col-lg-8 pr">
                                <div className="header-search row text-right">
                                    <div className="header-search-box ">
                                        <form action="#" className="form-search d-flex justify-content-between align-items-center">
                                            <input type=" search" onFocus={shownHandlerSearch} onBlur={unShownHandlerSearch} className="header-search-input" name="search-input" placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…" />
                                            <div className="action-btns d-flex align-items-center justify-content-between">
                                                <FilterSearch />

                                                <button className="btn btn-search" type="submit">
                                                    <img src="/img/search.png" alt="search" />
                                                </button>
                                            </div>
                                        </form>
                                        <div className="search-result" ref={resultSearch} >
                                            <ul className="search-result-list mb-0">
                                                <li>
                                                    <a href="#"><i className="fas fa-clock-four"></i>
                                                        کالای دیجیتال
                                                        <button className="btn btn-light btn-continue-search" type="submit">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-clock-four"></i>
                                                        آرایشی و بهداشتی
                                                        <button className="btn btn-light btn-continue-search" type="submit">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-clock-four"></i>
                                                        گوشی موبایل
                                                        <button className="btn btn-light btn-continue-search" type="submit">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-clock-four"></i>
                                                        تبلت
                                                        <button className="btn btn-light btn-continue-search" type="submit">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-clock-four"></i>
                                                        لپ تاپ
                                                        <button className="btn btn-light btn-continue-search" type="submit">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#"><i className="fas fa-clock-four"></i>
                                                        دوربین
                                                        <button className="btn btn-light btn-continue-search" type="submit">
                                                            <i className="fa fa-angle-left"></i>
                                                        </button>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="localSearchSimple"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 col-md-0 col-xs-12 pl">
                        <div className="header-left">
                            <div className="header-account text-left">
                                <div className="d-block">
                                    <div className="account-box">
                                        <div className="nav-account d-flex align-items-center justify-content-end  pl">

                                            <span className="title-account">حساب کاربری</span>
                                            <div>
                                                <ul className="account-uls p-0">
                                                    <li className="account-item">
                                                        <a href="#" className="account-link">پنل کاربری</a>
                                                    </li>
                                                    <li className="account-item">
                                                        <a href="#" className="account-link">سفارشات من</a>
                                                    </li>
                                                    <li className="account-item">
                                                        <a href="#" className="account-link">تنظیمات</a>
                                                    </li>
                                                    <li className="account-item">
                                                        <a href="#" className="account-link">خروج</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <span className="icon-account">
                                                <img src="/img/user/man.png" className="avator" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="search_box-mobile col-12 mx-auto">
                        <div className="header-search row text-right">
                            <div className="header-search-box ">
                                <form action="#" className="form-search d-flex justify-content-between align-items-center">
                                    <input type=" search" onFocus={shownHandlerSearchMobile} onBlur={unShownHandlerSearchMobile} className="header-search-input" name="search-input" placeholder="نام کالا، برند و یا دسته مورد نظر خود را جستجو کنید…" />
                                    <div className="action-btns d-flex align-items-center justify-content-between">
                                        <FilterSearch />

                                        <button className="btn btn-search" type="submit">
                                            <img src="/img/search.png" alt="search" />
                                        </button>
                                    </div>
                                </form>
                                <div className="search-result" ref={resultSearchMobile} >
                                    <ul className="search-result-list mb-0">
                                        <li>
                                            <a href="#"><i className="fas fa-clock-four"></i>
                                                کالای دیجیتال
                                                <button className="btn btn-light btn-continue-search" type="submit">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-clock-four"></i>
                                                آرایشی و بهداشتی
                                                <button className="btn btn-light btn-continue-search" type="submit">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-clock-four"></i>
                                                گوشی موبایل
                                                <button className="btn btn-light btn-continue-search" type="submit">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-clock-four"></i>
                                                تبلت
                                                <button className="btn btn-light btn-continue-search" type="submit">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-clock-four"></i>
                                                لپ تاپ
                                                <button className="btn btn-light btn-continue-search" type="submit">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fas fa-clock-four"></i>
                                                دوربین
                                                <button className="btn btn-light btn-continue-search" type="submit">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="localSearchSimple"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="header-main-nav">
                    <div className="d-flex justify-content-between ">
                        <div className="menu__phone" onClick={shownMenu}>
                            <i className="fa fa-bars" aria-hidden="true"></i>
                        </div>
                        <div className="navBar__rigth w-75">
                            <ul className="menu-ul d-flex  mega-menu-level-one">
                                <li id="nav-menu-item" className="menu-item nav-overlay">
                                    <a href="#" className="current-link-menu">
                                        کالای دیجیتال
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="sub-menu is-mega-menu mega-menu-level-two">
                                        <li className="menu-mega-item  menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                موبایل
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اپل
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سامسونگ
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        نوکیا
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ایسوس
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        هواوی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        الجی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اچ تی سی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سونی
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                تبلت و کتابخوان
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اپل
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سامسونگ
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        نوکیا
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ایسوس
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ایسر
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        الجی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اچ تی سی
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                کامپیوتر و تجهیزات جانبی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        هارد دیسک
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ماوس
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کیبورد
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        نمایشگر
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        پردازنده
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        مادربرد
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کارت گرافیک
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                دوربین
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        دوربین عکاسی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        دوربین فیلم برداری
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تلسکوپ
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        میکروسکوپ و ذره بین
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        لوازم جانبی عکاسی و فیلم برداری
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="bg-image">
                                            <img src="/img/megamenu/digital.png" alt="" />
                                        </li>
                                    </ul>
                                </li>
                                <li id="nav-menu-item" className="menu-item nav-overlay" data-id="190">
                                    <a href="#" className="current-link-menu">
                                        آرایشی و بهداشتی
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="sub-menu is-mega-menu mega-menu-level-two">
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                لوازم آرایشی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        آرایش چشم و ابرو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        آرایش لب
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        آرایش صورت
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تجهیزات جانبی آرایش
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سنگ پا و زیبایی ناخن
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        مواد آرایش مو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کرم و مراقبت پوست
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        شامپو و مراقبت مو
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                لوازم شخصی برقی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ماشین اصلاح صورت
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ماشین اصلاح سر
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سشوار
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اصلاح بدن آقایان
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اصلاح موی گوش، بینی و ابرو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        برس پاک سازی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اتو مو و حالت دهنده
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                لوازم بهداشتی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کرم و مراقبت پوست
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        شامپو و مراقبت مو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        بهداشت دهان و دندان
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        بهداشت و مراقبت بدن
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ضد تعریق
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                ابزار سلامت و طبی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        مچ بند و ساعت هوشمند
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ترازو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کالای خواب و استراحت طبی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تست قند خون
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تب سنج
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        فشارسنج
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ابزار مراقبت پا
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        نمایشگر ضربان قلب
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="bg-image">
                                            <img src=" /img/megamenu/cosmetic.png" alt="" />
                                        </li>
                                    </ul>
                                </li>
                                <li id="nav-menu-item" className="menu-item">
                                    <a href="#" className="current-link-menu">
                                        ابزار و اداری
                                    </a>
                                </li>
                                <li id="nav-menu-item" className="menu-item">
                                    <a href="#" className="current-link-menu">
                                        مد و پوشاک
                                    </a>
                                </li>
                                <li id="nav-menu-item" className="menu-item nav-overlay">
                                    <a href="#" className="current-link-menu">
                                        خانه و آشپزخانه
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="sub-menu is-mega-menu mega-menu-level-two">
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                لوازم آرایشی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        آرایش چشم و ابرو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        آرایش لب
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        آرایش صورت
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تجهیزات جانبی آرایش
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سنگ پا و زیبایی ناخن
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        مواد آرایش مو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کرم و مراقبت پوست
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        شامپو و مراقبت مو
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                لوازم شخصی برقی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ماشین اصلاح صورت
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ماشین اصلاح سر
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        سشوار
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اصلاح بدن آقایان
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اصلاح موی گوش، بینی و ابرو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        برس پاک سازی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        اتو مو و حالت دهنده
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                لوازم بهداشتی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کرم و مراقبت پوست
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        شامپو و مراقبت مو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        بهداشت دهان و دندان
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        بهداشت و مراقبت بدن
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ضد تعریق
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu">
                                            <a href="#" className="mega-menu-link">
                                                ابزار سلامت و طبی
                                            </a>
                                            <ul className="sub-menu mega-menu-level-three">
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        مچ بند و ساعت هوشمند
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ترازو
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        کالای خواب و استراحت طبی
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تست قند خون
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        تب سنج
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        فشارسنج
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        ابزار مراقبت پا
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item-three">
                                                    <a href="#">
                                                        نمایشگر ضربان قلب
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="bg-image">
                                            <img src="/img/megamenu/kitchen.png" alt="" />
                                        </li>
                                    </ul>
                                </li>
                                <li id="nav-menu-item " className="menu-item nav-menu-item-min nav-overlay megaMenu">
                                    <a href="#" className="current-link-menu">
                                        لوازم تحریر و هنر
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="sub-menu is-mega-menu-small">
                                        <li className="menu-mega-item menu-item-type-mega-menu item-small">
                                            <a href="#" className="mega-menu-link">
                                                کتاب و مجله
                                            </a>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu item-small">
                                            <a href="#" className="mega-menu-link">
                                                کتاب صوتی
                                            </a>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu item-small">
                                            <a href="#" className="mega-menu-link">
                                                محتوای آموزشی
                                            </a>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu item-small megaMenu-1">
                                            <a href="#" className="mega-menu-link d-flex justify-content-between">
                                                لوازم تحریر
                                                <i className="fa fa-angle-left"></i>
                                            </a>
                                            <ul className="sub-menu is-mega-menu-small-three">
                                                <li className="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                    <a href="#">
                                                        چراغ مطالعه
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                    <a href="#">
                                                        نوشت افزار
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                    <a href="#">
                                                        دفتر و کاغذ
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                    <a href="#">
                                                        میز تحریر
                                                    </a>
                                                </li>
                                                <li className="menu-mega-item menu-item-type-mega-menu item-small-three">
                                                    <a href="#">
                                                        البوم عکس
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-mega-item menu-item-type-mega-menu item-small">
                                            <a href="#" className="mega-menu-link">
                                                نرم افزار
                                            </a>
                                        </li>
                                    </ul>
                                </li>


                            </ul>

                        </div>
                        <div className="navBar__left d-flex w-25 align-items-center justify-content-end">
                            <div className="header-cart-interest">
                                <a href="#" className="popular__product-user ">
                                    <i className="fa fa-heart"></i>
                                    <span className="counter__count">۲</span>
                                </a>
                            </div>
                            <div className="header-cart-basket">
                                <a href="#" className="cart-basket-box">
                                    <span className="icon-cart">
                                        <i className="fas fa-shopping-bag"></i>
                                    </span>
                                    <span className="title-cart">سبد خرید</span>
                                    <span className="price-cart">25,000,000
                                        <span>تومان</span>
                                    </span>
                                    <span className="count-cart">2</span>
                                </a>
                                <div className="widget-shopping-cart">
                                    <div className="widget-shopping-cart-content">
                                        <div className="wrapper">
                                            <div className="scrollbar" id="style-1">
                                                <div className="force-overflow">
                                                    <ul className="product-list-widget">
                                                        <li className='mini-cart-item'>
                                                            <div className='mini-cart-item_img'>
                                                                <img src="./img/buy/img-card-2.jpg" alt="kala market" />
                                                                <span className='close_product'><i className='fas fa-close'></i></span>
                                                            </div>
                                                            <div className='mini-cart-item_infor'>
                                                                <h6 className='mini-cart-item_infor-title'>لپ تاپ چووی
                                                                    الترابوک 14
                                                                    اینچ پرو</h6>
                                                                <h6 className='mini-cart-item_infor-title-seller'>فروشنده کالا مارکت</h6>
                                                                <div className='d-flex justify-content-between mini-cart-item_infor-bottom'>
                                                                    <span className='mini-cart-item_infor-price'>15,000,000  تومان</span>
                                                                    <div className='mini-cart-item_infor-bottom-color-box'>
                                                                        <h6 className='mini-cart-item_infor-color-them'></h6>
                                                                        <span className='mini-cart-item_infor-color'>رنگ</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className='mini-cart-item'>
                                                            <div className='mini-cart-item_img'>
                                                                <img src="./img/buy/img-card.jpg" alt="kala market" />
                                                                <span className='close_product'><i className='fas fa-close'></i></span>
                                                            </div>
                                                            <div className='mini-cart-item_infor'>
                                                                <h6 className='mini-cart-item_infor-title'>لپ تاپ چووی
                                                                    الترابوک 14
                                                                    اینچ پرو</h6>
                                                                <h6 className='mini-cart-item_infor-title-seller'>فروشنده کالا مارکت</h6>
                                                                <div className='d-flex justify-content-between mini-cart-item_infor-bottom'>
                                                                    <span className='mini-cart-item_infor-price'>15,000,000  تومان</span>
                                                                    <div className='mini-cart-item_infor-bottom-color-box'>
                                                                        <h6 className='mini-cart-item_infor-color-them'></h6>
                                                                        <span className='mini-cart-item_infor-color'>رنگ</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mini-card-total">
                                            <strong>قیمت کل : </strong>
                                            <span className="price-total"> 25,000,000
                                                <span>تومان</span>
                                            </span>
                                        </div>
                                        <div className="mini-card-button">
                                            <a href="cart.html" className="view-card">مشاهده سبد خرید</a>
                                            <a href="checkout.html" className="card-checkout">تسویه حساب</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </nav>
                {/* <!--    responsive-megamenu-mobile-----------------> */}
                <nav className="sidebar" onClick={moveMenu} ref={menuPhone}>
                    <div className='sidebar_box'>
                        <div className="nav-header">
                            <div className="header-cover"></div>
                            <div className="logo-wrap">
                                <a className="logo-icon" href="#"><img alt="logo-icon" src="/img/logo/logo.png" /></a>
                            </div>
                        </div>
                        <ul className="nav-categories ul-base">
                            <li>
                                <a href="#" className="collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">کالای
                                    دیجیتال<i className="fas fa-chevron-down"></i></a>
                                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <ul>
                                        <li className="has-sub"><a href="#" className="category-level-2">لوازم جانبی گوشی</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">کیف و کاور گوشی</a></li>
                                                <li><a href="#" className="category-level-3">پاور بانک(شارژر همراه)</a></li>
                                                <li><a href="#" className="category-level-3">پایه نگهدارنده گوشی</a></li>
                                                <li><a href="#" className="category-level-3">همه موارد این دسته</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#" className="category-level-2">گوشی موبایل</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">سامسونگ</a></li>
                                                <li><a href="#" className="category-level-3">هوآوی</a></li>
                                                <li><a href="#" className="category-level-3">اپل</a></li>
                                                <li><a href="#" className="category-level-3">شیائومی</a></li>
                                                <li><a href="#" className="category-level-3">آنر</a></li>
                                                <li><a href="#" className="category-level-3">نوکیا</a></li>
                                                <li><a href="#" className="category-level-3">همه موارد این دسته</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#" className="category-level-2">دوربین</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">دوربین عکاسی دیجیتال</a></li>
                                                <li><a href="#" className="category-level-3">دوربین ورزشی و فیلم برداری</a></li>
                                                <li><a href="#" className="category-level-3">دوربین چاپ سریع</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" className="collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">آرایشی
                                و بهداشتی<i className="fas fa-chevron-down"></i></a>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample" >
                                    <ul>
                                        <li className="has-sub"><a href="#" className="category-level-2">لوازم جانبی گوشی</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">کیف و کاور گوشی</a></li>
                                                <li><a href="#" className="category-level-3">پاور بانک(شارژر همراه)</a></li>
                                                <li><a href="#" className="category-level-3">پایه نگهدارنده گوشی</a></li>
                                                <li><a href="#" className="category-level-3">همه موارد این دسته</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#" className="category-level-2">گوشی موبایل</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">سامسونگ</a></li>
                                                <li><a href="#" className="category-level-3">هوآوی</a></li>
                                                <li><a href="#" className="category-level-3">اپل</a></li>
                                                <li><a href="#" className="category-level-3">شیائومی</a></li>
                                                <li><a href="#" className="category-level-3">آنر</a></li>
                                                <li><a href="#" className="category-level-3">نوکیا</a></li>
                                                <li><a href="#" className="category-level-3">همه موارد این دسته</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#" className="category-level-2">دوربین</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">دوربین عکاسی دیجیتال</a></li>
                                                <li><a href="#" className="category-level-3">دوربین ورزشی و فیلم برداری</a></li>
                                                <li><a href="#" className="category-level-3">دوربین چاپ سریع</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" className='collapsed'>ابزار و اداری</a></li>
                            <li><a href="#" className='collapsed'>مد و پوشاک</a></li>
                            <li><a href="#" className="collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">خانه
                                و آشپزخانه<i className="fas fa-chevron-down"></i></a>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <ul>
                                        <li className="has-sub"><a href="#" className="category-level-2">لوازم جانبی گوشی</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">کیف و کاور گوشی</a></li>
                                                <li><a href="#" className="category-level-3">پاور بانک(شارژر همراه)</a></li>
                                                <li><a href="#" className="category-level-3">پایه نگهدارنده گوشی</a></li>
                                                <li><a href="#" className="category-level-3">همه موارد این دسته</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#" className="category-level-2">گوشی موبایل</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">سامسونگ</a></li>
                                                <li><a href="#" className="category-level-3">هوآوی</a></li>
                                                <li><a href="#" className="category-level-3">اپل</a></li>
                                                <li><a href="#" className="category-level-3">شیائومی</a></li>
                                                <li><a href="#" className="category-level-3">آنر</a></li>
                                                <li><a href="#" className="category-level-3">نوکیا</a></li>
                                                <li><a href="#" className="category-level-3">همه موارد این دسته</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-sub"><a href="#" className="category-level-2">دوربین</a>
                                            <ul>
                                                <li><a href="#" className="category-level-3">دوربین عکاسی دیجیتال</a></li>
                                                <li><a href="#" className="category-level-3">دوربین ورزشی و فیلم برداری</a></li>
                                                <li><a href="#" className="category-level-3">دوربین چاپ سریع</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" className='collapsed'>لوازم تحریر و هنر</a></li>
                            <li><a href="#" className='collapsed'>کودک و نوزاد</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="nav-btn nav-slider">
                    <span className="linee1"></span>
                    <span className="linee2"></span>
                    <span className="linee3"></span>
                </div>
                <div className="overlay"></div>
                {/* <!-- bottom-menu-joomy --> */}
                <div className="bottom-menu-joomy">
                    <ul className="mb-0">
                        <li>
                            <a href="home-1.html">
                                <i className="fa fa-home"></i>
                                صفحه اصلی
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="nav-btn nav-slider">
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </div>
                                دسته بندی ها
                            </a>
                        </li>
                        <li className='cart_bottom'>
                            <a href="cart.html">
                                <i className="fa fa-shopping-cart"></i>
                                سبد خرید
                                <div className="shopping-bag-item">2</div>
                            </a>
                        </li>
                        <li>
                            <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
                                <i className="fa fa-search"></i>
                                جستجو
                            </a>
                        </li>
                        <li>
                            <a href="login.html">
                                <i className="fa fa-user"></i>
                                حساب کاربری
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!--    responsive-megamenu-mobile-----------------> */}
            </div>
        </header>

    )
}

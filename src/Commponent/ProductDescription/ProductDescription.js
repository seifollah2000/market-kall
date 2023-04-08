import React, { useState } from 'react'
import './ProductDescription.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'
import { GiSunglasses } from 'react-icons/gi'
import { BsUiChecks } from 'react-icons/bs'
import { MdMessage } from 'react-icons/md'
import { TbMessages } from 'react-icons/tb'
import Tob from '../../Commponent/Tob/Tob'
import ReadMore from '../Read more/ReadMore';
import PointsProduct from '../../Commponent/Points-Product/Points-Product'
import AccordionProduct from '../Accordion-Product/Accordion-Product';
import Specifications from '../Specifications/Specifications';
import RangeProductQuality from '../Range-Product-quality/Range-Product-quality';
import BoxUser from '../box-user/BoxUser';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Question from '../Question/Question';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function ProductDescription() {
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab
                            label={<Tob title='نقد بررسی' >
                                <GiSunglasses />
                            </Tob>}
                            {...a11yProps(0)} />
                        <Tab label={
                            <Tob title="مشخصات">
                                <BsUiChecks />
                            </Tob>
                        } {...a11yProps(1)} />
                        <Tab label={
                            <Tob title="دیدگاه">
                                <MdMessage />
                            </Tob>
                        } {...a11yProps(2)} />
                        <Tab label={
                            <Tob title="پرسش و پاسخ">
                                <TbMessages />
                            </Tob>
                        } {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <div className="product__description-item">
                        <div className="product__description-criticism-head">
                            <ReadMore />
                            <div className="points__product d-flex align-items-start justify-content-around p-3 mt-5">
                                <div className="points__product-good">
                                    <h6>نقاط قوت</h6>
                                    <div className="points__product-items pe-1">
                                        <PointsProduct title=" صفحه نمایش OLED از نوع Infinity-O" mode={true} />
                                        <PointsProduct title="طراحی فشرده" mode={true} />
                                        <PointsProduct title="عمر بالای باتری" mode={true} />
                                        <PointsProduct title=" S-Pen با قابلیت های ویژه" mode={true} />
                                        <PointsProduct title=" اسپیکر با صدای بلند و استریو" mode={true} />


                                    </div>
                                </div>
                                <div className="points__product-bad ">
                                    <h6>نقاط ضعیف</h6>
                                    <div className="points__product-items pe-1">
                                        <PointsProduct title=" نداشتن جک 3.5 میلی متری" mode={false} />
                                        <PointsProduct title=" نداشتن فوکس خودکار در دوربین فوق عریض" mode={false} />

                                    </div>
                                </div>
                            </div>
                            <div className="accordion__product-items p-3 mt-5">

                                <AccordionProduct title="طراحی و ساخت؛ زیبای خاص">

                                    <p>باید در همین ابتدا اعتراف کنیم Galaxy Note 10 یک گوشی بسیار زیباست. البته شاید این تعریف کمی شخصی به نظر برسد اما ظاهر این گوشی آن‌قدر زیباست که جایی را برای گله و شکایت باقی نمی‌گذارد.
                                        در این گوشی دوست‌داشتنی صفحه‌نمایش تقریباً تمام قاب جلویی را پوشانده است. این گوشی ابعاد بزرگی دارد و با صفحه‌نمایش 6.3
                                        که تقریبا 0.2 اینچ بزرگتر از S10 است، در گروه فبلت‌ها جای می‌گیرد. اگر به دنبال
                                        خرید این گوشی هوشمند هستید، احتمالاً قبلاً هم گوشی بزرگی داشته‌اید و اندازه آن برایتان آزاردهنده نخواهد بود. اولین راه‌حل موفق برای ساده کردن فرمول زیبایی و کارایی بیشتر، تغییر مکان حسگر اثرانگشت در گلکسی نوت 10 است.
                                        با توجه به امنیت بالای این راه برای باز کردن گوشی، حذف آن چندان منطقی به نظر نمی‌رسد. در این گوشی خبری از حسگر اثرانگشت روی قاب
                                        جلویی نیست و در عوض این حسگر زیر صفحه‌نمایش قرار گرفته است تا Galaxy Note 10 از همه نظر به گوشی مدرن تبدیل شود. تفاوت دیگری که امسال گلکسی سری نوت با گلسی سری S  داشته اند محل قرار
                                        گرفتن دوربین سلفی آن ها است. به طوری که دوربین سلفی در S10 در قسمت بالای سمت راست قرار گرفته و در نوت 10 در مرکز بالای صفحه نمایش تعبیه شده است.</p>
                                    <img src="/img/product-info/product-img-note10-big-1.jpg" alt="kala market" />

                                </AccordionProduct>
                                <AccordionProduct title="صفحه‌نمایش؛ همان خیره‌کننده‌ی همیشگی">

                                    <p>باید در همین ابتدا اعتراف کنیم Galaxy Note 10 یک گوشی بسیار زیباست. البته شاید این تعریف کمی شخصی به نظر برسد اما ظاهر این گوشی آن‌قدر زیباست که جایی را برای گله و شکایت باقی نمی‌گذارد.
                                        در این گوشی دوست‌داشتنی صفحه‌نمایش تقریباً تمام قاب جلویی را پوشانده است. این گوشی ابعاد بزرگی دارد و با صفحه‌نمایش 6.3
                                        که تقریبا 0.2 اینچ بزرگتر از S10 است، در گروه فبلت‌ها جای می‌گیرد. اگر به دنبال
                                        خرید این گوشی هوشمند هستید، احتمالاً قبلاً هم گوشی بزرگی داشته‌اید و اندازه آن برایتان آزاردهنده نخواهد بود. اولین راه‌حل موفق برای ساده کردن فرمول زیبایی و کارایی بیشتر، تغییر مکان حسگر اثرانگشت در گلکسی نوت 10 است.
                                        با توجه به امنیت بالای این راه برای باز کردن گوشی، حذف آن چندان منطقی به نظر نمی‌رسد. در این گوشی خبری از حسگر اثرانگشت روی قاب
                                        جلویی نیست و در عوض این حسگر زیر صفحه‌نمایش قرار گرفته است تا Galaxy Note 10 از همه نظر به گوشی مدرن تبدیل شود. تفاوت دیگری که امسال گلکسی سری نوت با گلسی سری S  داشته اند محل قرار
                                        گرفتن دوربین سلفی آن ها است. به طوری که دوربین سلفی در S10 در قسمت بالای سمت راست قرار گرفته و در نوت 10 در مرکز بالای صفحه نمایش تعبیه شده است.</p>
                                    <img src="/img/product-info/product-img-note10-big-1.jpg" alt="kala market" />
                                </AccordionProduct>
                                <AccordionProduct title="سخت‌افزار، سیستم‌عامل و کارایی">
                                    <p>باید در همین ابتدا اعتراف کنیم Galaxy Note 10 یک گوشی بسیار زیباست. البته شاید این تعریف کمی شخصی به نظر برسد اما ظاهر این گوشی آن‌قدر زیباست که جایی را برای گله و شکایت باقی نمی‌گذارد.
                                        در این گوشی دوست‌داشتنی صفحه‌نمایش تقریباً تمام قاب جلویی را پوشانده است. این گوشی ابعاد بزرگی دارد و با صفحه‌نمایش 6.3
                                        که تقریبا 0.2 اینچ بزرگتر از S10 است، در گروه فبلت‌ها جای می‌گیرد. اگر به دنبال
                                        خرید این گوشی هوشمند هستید، احتمالاً قبلاً هم گوشی بزرگی داشته‌اید و اندازه آن برایتان آزاردهنده نخواهد بود. اولین راه‌حل موفق برای ساده کردن فرمول زیبایی و کارایی بیشتر، تغییر مکان حسگر اثرانگشت در گلکسی نوت 10 است.
                                        با توجه به امنیت بالای این راه برای باز کردن گوشی، حذف آن چندان منطقی به نظر نمی‌رسد. در این گوشی خبری از حسگر اثرانگشت روی قاب
                                        جلویی نیست و در عوض این حسگر زیر صفحه‌نمایش قرار گرفته است تا Galaxy Note 10 از همه نظر به گوشی مدرن تبدیل شود. تفاوت دیگری که امسال گلکسی سری نوت با گلسی سری S  داشته اند محل قرار
                                        گرفتن دوربین سلفی آن ها است. به طوری که دوربین سلفی در S10 در قسمت بالای سمت راست قرار گرفته و در نوت 10 در مرکز بالای صفحه نمایش تعبیه شده است.</p>
                                    <img src="/img/product-info/product-img-note10-big-1.jpg" alt="kala market" />
                                </AccordionProduct>
                            </div>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="product__description-item">
                        <h6 className='specifications'>مشخصات فنی</h6>
                        <div className='Specifications-title'>
                            <h6>Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</h6>
                        </div>
                        <div className="product__specifications-body">
                            <Specifications />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="product__description-item">
                        <h6 className='specifications'> امتیاز کاربران به</h6>
                        <div className='Specifications-title'>
                            <h6>Samsung Galaxy Note 10 Dual SIM 256GB Mobile Phone</h6>
                        </div>
                        <div className="scoreUsersTo">
                            <div className="scoreUsersTo-head row justify-content-between">

                                <div className="scoreUsersTo__rigth mx-2 col-5">
                                    <RangeProductQuality title="کیفیت ساخت:" score='خوب' now={78} />
                                    <RangeProductQuality title="ارزش خرید به نسبت قیمت:" score="متوسط" now={67} />
                                    <RangeProductQuality title="نوآوری:" score="خوب" now={87} />
                                    <RangeProductQuality title="امکانات و قابلیت ها:" score="خوب" now={82} />
                                    <RangeProductQuality title="سهولت استفاده:" score="متوسط" now={58} />
                                    <RangeProductQuality title="طراحی و ظاهر:" score="خوب" now={98} />


                                </div>
                                <div className="scoreUsersTo__left col-6">
                                    <h5 className='scoreUsersTo__left-title '>شما هم می‌توانید در مورد این کالا نظر بدهید.</h5>
                                    <p className='scoreUsersTo__left-paragraph'>برای ثبت نظر، لازم است ابتدا وارد حساب کاربری خود شوید. اگر این محصول را قبلا از دیجی‌کالا خریده باشید، نظر شما به عنوان مالک محصول ثبت خواهد شد.</p>
                                    <button className="scoreUsersTo__left-btn ">افزودن و نظر جدید </button>
                                </div>
                                <div className='product-comment-list py-5'>
                                    <ul className='comment-list'>
                                        <li className='row'>
                                            <div className="col-lg-3 pr">


                                                <BoxUser nameUser="سیف اله نجفی" date="در تاریخ ۱۸ فروردین ۱۳۹۹" text="خرید این محصول را توصیه میکنم " />
                                            </div>
                                            <div className="col-lg-9 pl">
                                                <div className="article">
                                                    <ul className="comment-text">
                                                        <div className="comment-text-header">
                                                            <div className='comment-text-header-title'>بهتر از آیفون</div>
                                                            <div className="comment-text-header-star d-flex align-items-center justify-content-between">

                                                                <p>در کل سامسونگ کاربردی تر از آیفون هست ولی از نظر
                                                                    کیفیت تصویر و سرعت آیفون بهتره و کلاس!</p>
                                                                <div className="product-rate pl">
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                    <i className="fa fa-star active"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="comments-evaluation row">
                                                            <div className="comments-evaluation-positive col-4">
                                                                <span className='py-1'>نقاط قوت</span>
                                                                <ul>
                                                                    <PointsProduct title="سبک" mode={true} />
                                                                    <PointsProduct title="سرعت پردازش بالا" mode={true} />
                                                                    <PointsProduct title=" خوش دست" mode={true} />
                                                                    <PointsProduct title="صفحه نمایش عالی" mode={true} />

                                                                </ul>
                                                            </div>
                                                            <div className="comments-evaluation-negative col-4">
                                                                <span className='py-1'>نقاط ضعف</span>
                                                                <ul>
                                                                    <PointsProduct title="قیمت زیاد" mode={false} />
                                                                    <PointsProduct title=" باطری ضعیف" mode={false} />



                                                                </ul>
                                                            </div>
                                                            <div className="comments-evaluation-footer pt-4">
                                                                <div className="comments-likes">آیا این نظر برایتان
                                                                    مفید بود؟
                                                                    <button className="btn-like js-comment-like-footer" type="submit">بله
                                                                        <span className="count">8</span>
                                                                    </button>
                                                                    <button className="btn-like js-comment-dislike-footer" type="submit">خیر
                                                                        <span className="count">4</span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div className="QuestionsAndAnswers">
                        <div className="QuestionsAndAnswers__head">
                            <h6 className='specifications'>پرسش و پاسخ</h6>
                            <div className='Specifications-title'>
                                <h6>پرسش خود را در مورد محصول مطرح نمایید</h6>
                            </div>
                        </div>
                        <div className="QuestionsAndAnswers__body">
                            <textarea name="Questions" id="Questions" ></textarea>
                            <div className="QuestionsAndAnswers__body-btn d-flex align-items-center py-3">
                                <button >ثبت و پرسش</button>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="اولین پاسخی که به پرسش من داده شد، از طریق ایمیل به من اطلاع دهید." />
                                </FormGroup>
                            </div>
                        </div>
                        <ul className='QuestionsAndAnswers__footer py-3'>
                            <Question date="۱۴ فروردین ۱۳۹۹" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" typeQuestion="پرسش" user="علی نجفی" />
                            <Question date="۱۴ فروردین ۱۳۹۹" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد." typeQuestion="پاسخ مشتری" user="سیف اله نجفی" />
                        </ul>
                    </div>
                </TabPanel>
            </Box>
        </>
    )
}

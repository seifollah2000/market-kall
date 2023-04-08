import React, { useRef, useState } from 'react'
import './ReadMore.css'
export default function ReadMore() {
  const [shown, setShown] = useState(false)
  const shownHandler = () => {

  }
  return (
    <div className='product__description-criticism-head'>
      <h5 className='product__description-criticism-head-title'>نقد و بررسی اجمالی</h5>

      <p className={`product__description-criticism-head-para ${shown && "shownReadMore"}`} >
        اولین گوشی همراه سری گلکسی نوت در سال 2011 روانه بازار شد تا خانواده افسانه‌ای نوت را برای
        اولین بار به دنیا معرفی و تعریفی
        نو برای محصولات «فبلت‌» ارائه کند. حدود 8 سال پس از آن، سامسونگ برای عرضه عضو جدید خانواده نوت (Galaxy Note 10) با چالش‌های جدیدی مواجه است؛ این چالش‌ها ویژگی‌های مدرنی هستند که در محصولات رقیب دیده می‌شوند. گلکسی نوت‌ها به‌طور
        عمومی شبیه سری Galaxy S هستند؛ با این تفاوت که صفحه‌نمایش بزرگ‌تر و یک قلم دیجیتال S Pen دارند. گوشی موبایل Samsung Galaxy Note10 با دوربین سه گانه در قاب پشتی روانه بازار شده است؛ این سه سنسور با داشتن ویژگی‌هایی مانند لرزشگیر تصویر و قابلیت فیلم‌برداری 4K خروجی تصویر مطلوبی را برای جدیدترین عضو خانواده
        Note به همراه دارند. پردازش محاسبات در این تازه‌وارد از طریق تراشه‌ی Exynos 9825 انجام می‌شود که در رده تراشه‌های 7 نانومتری قرار می‌گیرد و با سرعت بالای خود، گلکسی نوت 10 را برای انجام کارهای بسیار سنگین کاربردی کرده است. تراشه‌ی گرافیکی Mali-G76 هم در اجرای بازی‌های سنگین و پردازش‌های گرافیکی، گلکسی نوت 10 را سربلند خواهد بود.
        صفحه‌نمایش سوپر آمولد با رزولوشن 1080 در 2280 و قابلیت نمایش 401 پیکسل در هر اینچ، تجربه‌ی تصویری شفاف و بسیار مطلوب را برای کاربران فراهم می‌کند. نسخه 256 گیگابایتی گوشی گلکسی نوت 10 با 8 گیگابایت رم عرضه شده است  تا میزان مطلوبی از فضا و حافظه تصادفی را در اختیار کاربر قرار دهد. حسگر اثرانگشت زیرصفحه‌نمایش، حسگر فشارسنج و ژیروسکوپ تنها تعدادی از امکانات این دستگاه قدرتمند است و کار را برای رقبای این محصول بزرگ سخت کرده است. البته در این محصول خبری از سنسور عنبیه چشم و خروجی 3.5 میلی‌متری صدا نیست که دلیل آن را می‌توان در بزرگ شدن قاب و ظرافت در طراحی و ساخت جست‌وجو کرد. گفتنی است، باتری این محصول از نوع غیرقابل تعویض و لیتیوم‌یون با ظرفیت 3500 میلی‌آمپر ساعت است که از فناوری‌های شارژ سریع و شارژ بی‌سیم پشتیبانی می‌کند. این محصول قادر
        است دستگاه‌های دیگر را هم به‌صورت بی‌سیم شارژ کند و از این طریق نقش یک پاوربانک را هم ایفا کند.

      </p>
      <button onClick={() => setShown(prev => !prev)} className={`product__description-criticism-head-btn mx-auto w-100 ${shown || 'filterInShownReadMore'}`}>{shown ? "- بستن " : "  + ادامه مطلب"}</button>
    </div>
  )
}
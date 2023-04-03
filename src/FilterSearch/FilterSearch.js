import React, { useEffect, useRef, useState } from 'react'
import './FilterSearch.css'
import Option from './option/Option'

export default function FilterSearch() {
    const [textFiltered, setTextFiltered] = useState('همه دسته ها')
    const shownFilter = useRef()

    const shownClickHandler = () => {
        shownFilter.current.classList.add('header__shown-search')
    }

    const selectedOption = (valueSelected, event) => {
        shownFilter.current.classList.remove('header__shown-search')
        setTextFiltered(valueSelected)
        let allList = []
        allList.push(shownFilter.current.children)
        allList.forEach(item => {
            [...item].forEach(li => {
                if (li.className === 'option selected') {
                    li.className = 'option'
                }
            })

        })
        event.target.classList.add('selected')
    }





    return (
        <div className="search-filter">
            <div className="form-ui">
                <div className="custom-select-ui">

                    <div className="nice-select d-flex align-items-center justify-content-center right" tabindex="0">
                        <span className="header__current" onClick={shownClickHandler}>{textFiltered} <i className='fas fa-angle-down'></i></span>
                        <ul className="header__list-filter" ref={shownFilter}>

                            <Option selectedOption={selectedOption} dataValue="همه دسته ها" className="option selected" />
                            <Option selectedOption={selectedOption} dataValue="کالای دیجیتال" className="option" />
                            <Option selectedOption={selectedOption} dataValue="آرایشی بهداشتی" className="option" />
                            <Option selectedOption={selectedOption} dataValue="ابزاری اداری" className="option" />
                            <Option selectedOption={selectedOption} dataValue="مد پوشاک" className="option" />
                            <Option selectedOption={selectedOption} dataValue="خانه آشپز خانه" className="option" />
                            <Option selectedOption={selectedOption} dataValue="لوازم تحریر و هنر" className="option" />
                            <Option selectedOption={selectedOption} dataValue="کودک و نوزاد" className="option" />


                        </ul>
                    </div>
                </div>
            </div>
        </div>)
}

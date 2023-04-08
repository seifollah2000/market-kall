import React, { useEffect, useRef, useState } from 'react'
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import './GoToTop.css'
import { ScrollTrigger } from 'gsap/all'
import { ScrollToPlugin } from 'gsap/all'
import { gsap } from 'gsap'

export default function GoToTop() {
    const [shown, setShown] = useState(false)
    window.addEventListener('scroll', (event) => {
        if (shown) {
            if (window.pageYOffset < 200) {
                setShown(false)
            }
        }

        if (!shown) {
            if (window.pageYOffset > 200) {
                setShown(true)
            }
        }
    })

    const gotoTopHandler = () => {
        gsap.registerPlugin(ScrollToPlugin);
        gsap.to(window, { direction: 1, scrollTo: { y: 0, x: 0 }, ease: "power2" })
    }
    return (
        <>

            <div max='100' value="0" className={`gototop ${shown ? ' ntGototop' : "falseGoToTop"}`} onClick={gotoTopHandler}>
                <MdKeyboardDoubleArrowUp />
            </div>

        </>
    )
}

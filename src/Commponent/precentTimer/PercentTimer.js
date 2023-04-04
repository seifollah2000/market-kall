import React, { useEffect, useMemo, useState } from 'react'
import './PercentTimer.css'

export default function PercentTimer() {
  const [secnd, setSecnd] = useState(45)
  const [min, setMin] = useState(12)
  const [horse, setHorse] = useState(16)
  const [day, setDay] = useState(987)

  return (
    <div className='precent_timer d-flex'>
      <div className="percent_time">
        <h6>{secnd}</h6>
        <span>ثانبه</span>
      </div>
      <div className="percent_time">
        <h6>{min}</h6>
        <span>دقیقه</span>
      </div>
      <div className="percent_time">
        <h6>{horse}</h6>
        <span>ساعت</span>
      </div>
      <div className="percent_time">
        <h6>{day}</h6>
        <span>روز</span>
      </div>
    </div>
  )
}

import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

import './Range-Product-quality.css'
export default function RangeProductQuality({ now, title, score }) {
    return (
        <div className='scoreUsersTo__rigth-item'>
            <div className="scoreUsersTo__rigth-item-title">
                <span>{title}</span>
                <span>{score}</span>
            </div>
            <div className="scoreUsersTo__rigth-range">
                <ProgressBar now={now} label={`${now}%`} visuallyHidden />
            </div>
        </div>
    )
}

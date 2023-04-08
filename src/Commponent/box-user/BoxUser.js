import React from 'react'
import './BoxUser.css'
import { BiLike } from 'react-icons/bi'
export default function BoxUser({ nameUser, date, text }) {
    return (
        <div className="comments-user-shopping">
            <h5 className='comments-user-shopping-nameUser'>
                {nameUser}

            </h5>
            <div className="cell-date d-flex align-items-center justify-content-center">
                {date}
            </div>
            <div className="message-light">
                <BiLike />
                <span>

                    {text}
                </span>
            </div>
        </div>

    )
}

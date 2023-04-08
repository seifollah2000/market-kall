import React from 'react'
import './Question.css'

export default function Question({ user, typeQuestion, text, date }) {
    return (
        <li class={`is-question ${typeQuestion !== 'پرسش' && 'answer-questions'}`}>
            <div class="section">
                <div class="faq-header">
                    <span class="icon-faq">?</span>
                    <p class="icon-faq-type">
                        {typeQuestion}:
                        <span className='icon-faq-user'>{user}</span>
                    </p>
                </div>
                <div class="is-question-body">
                    <p>{text}</p>
                </div>
                <div className="is-question-footer">

                    <span>{date}</span>
                    <a href="#" class="js-add-answer-btn col-12 justify-content-end">به این پرسش پاسخ
                        دهید </a>
                </div>
            </div>
        </li>
    )
}

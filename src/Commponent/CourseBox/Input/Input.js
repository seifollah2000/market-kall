import React from 'react'

export default function Input({ type, text }) {
    return (
        <>
            <input type={type} placeholder={text} />
        </>
    )
}

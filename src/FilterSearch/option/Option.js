import React from 'react'

export default function Option({ dataValue, className, selectedOption }) {
    const selected = (value, event) => {
        selectedOption(value, event)
    }
    return (
        <>
            <li className={className} onClick={(event) => selected(dataValue, event)}>{dataValue}</li>
        </>
    )
}

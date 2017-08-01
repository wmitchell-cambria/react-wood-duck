import React from 'react'

const DatePicker = ({gridClassName, fieldClassName, labelClassName, id, label, onChange, value, placeholder, type}) => (
    <div className={gridClassName}>
        <div>
            <label className={labelClassName} htmlFor={id}>{label}</label>
            <input className={fieldClassName} id={id} type="date" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    </div>
)

export {DatePicker}
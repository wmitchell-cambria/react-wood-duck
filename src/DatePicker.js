import React from 'react'

const DatePicker = ({gridClassName, fieldClassName, labelClassName, id, label, onChange, value, placeholder, type}) => (
    <div className={gridClassName}>
        <div>
            <label className={labelClassName} htmlFor={id}>Date Picker</label>
            <input className="form-control" id={id} type="date" placeholder="mm-dd-yyyy" value={value} onChange={onChange} />
        </div>
    </div>
)


export default DatePicker

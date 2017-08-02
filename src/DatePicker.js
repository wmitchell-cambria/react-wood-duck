import React from 'react'

const DatePick = ({gridClassName, fieldClassName, labelClassName, id, label, onChange, value, placeholder, type}) => (
    <div className={gridClassName}>
        <div>
            <label className={labelClassName} htmlFor={id}>{label}</label>
            <input className={fieldClassName} id={id} type="date" placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    </div>
)

class DatePicker extends React.Component {
	render () {
		return (
			<div>
			<DatePick  
				gridClassName= "col-md-4 col-sm-6 col-xs-12"
	            fieldClassName= "form-control"
	            label="Date Picker"
	            placeholder="mm-dd-yyyy"
			/>
			</div>
		)
	}
}

export default DatePicker

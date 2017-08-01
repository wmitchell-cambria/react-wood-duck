import React from 'react'

const InputComponent = ({gridClassName, fieldClassName, labelClassName, id, label, onChange, value, placeholder, type}) => (
  <div className={gridClassName}>
    <div>
      <label className={labelClassName} htmlFor={id}>{label}</label>
      <input className={fieldClassName} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  </div>
)

class InputFields extends React.Component {
	render () {
		return (
			<div>
			<InputComponent  />
			</div>
		)
	}
}

export default InputFields

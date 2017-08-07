import React from 'react'

const TextAreaComponent = ({gridClassName, labelClassName, fieldClassName, id, label, onChange, value, placeholder, type}) => (
  <div className={gridClassName}>
    <div>
      <label className={labelClassName} htmlFor={id}>{label}</label>
      <textarea className={fieldClassName} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  </div>
)

export default TextAreaComponent

import React from "react";
import Template from "@template";

const DatePicker = ({
  gridClassName,
  fieldClassName,
  labelClassName,
  id,
  label,
  onChange,
  value,
  placeholder,
  type
}) => (
  <Template>
    <div className="form-group">
      <div className={gridClassName}>
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
        <input
          className={fieldClassName}
          pattern="[0-9]{2}-[0-9]{2}-[0-9]{4}"
          id={id}
          type="date"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  </Template>
);

module.exports = DatePicker;

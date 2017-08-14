import React from 'react'

const CheckboxRadioGroup = (props) => (
    <div className={props.gridClassName}>
        <label className="form-label">{props.label}</label>
        <div>
            {props.options.map(opt => {
                return (
                    <div key={opt}>
                        <input
                            className={props.fieldClassName}
                            name={props.name}
                            onChange={props.handleOnChange}
                            value={opt}
                            checked={ props.selectedOptions.indexOf(opt) > -1 }
                            type={props.type} />
                    <label className={props.labelClassName}>
                      {opt}
                    </label>
                </div>
                );
            })}
        </div>
    </div>
);

CheckboxRadioGroup.propTypes = {
    label: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOptions: React.PropTypes.array,
    handleOnChange: React.PropTypes.func.isRequired
};

export default CheckboxRadioGroup;

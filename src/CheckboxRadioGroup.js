import React from 'react'

const CheckboxRadioGroup = (props) => (
    <fieldset className="fieldset-inputs sans col-md-4 col-sm-6 col-xs-12">
        <legend className="sr-only">{props.label}</legend>
        {props.options.map(opt => {
                return (
                    <label key={opt}>
                        <input
                            className={props.fieldClassName}
                            name={props.name}
                            onChange={props.handleOnChange}
                            value={opt}
                            checked={ props.selectedOptions.indexOf(opt) > -1 }
                            type={props.type} />
                        <span>{opt}</span>
                    </label>
                );
           })}
          
    </fieldset>
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

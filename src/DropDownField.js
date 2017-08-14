import React from 'react';

const DropDownField = (props) => (
    <div className="form-group">
        <div className={props.gridClassName}>
            <label>{props.label}</label>
            <select
                name={props.name}
                value={props.selectedOption}
                onChange={props.handleOnChange}
                className={props.selectClassName}
                disabled={props.disable}
            >
                <option value="">{props.placeholder}</option>
                {props.options.map(opt => {
                    return (
                        <option
                            key={opt}
                            value={opt}>{opt}</option>
                    );
                })}
            </select>
        </div>
    </div>
);

DropDownField.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedOption: React.PropTypes.string,
    handleOnChange: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
};

export default DropDownField;

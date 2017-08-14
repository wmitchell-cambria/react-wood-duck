import React from 'react'

const TextArea = (props) => (
    <div className="form-group">
        <div className={props.gridClassName}>
            <label className="form-label">{props.label}</label>
            <textarea
                className={props.labelClassName}
                style={props.resize ? null : {resize: 'none'}}
                name={props.name}
                rows={props.rows}
                value={props.value}
                onChange={props.handleOnChange}
                placeholder={props.placeholder} />
        </div>
    </div>
);

TextArea.propTypes = {
    label: React.PropTypes.string.isRequired,
    rows: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    resize: React.PropTypes.bool,
    placeholder: React.PropTypes.string,
    handleOnChange: React.PropTypes.func.isRequired
};

export default TextArea;

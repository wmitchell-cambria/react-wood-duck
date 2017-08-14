import React from 'react'


/* Attached Prop fields
* gridClassName, fieldClassName,labelClassName, id, label, onChange,
* value,placeholder, type, serverError, serverErrorMessage, validationError,validationErrorMessage, required
*
* */


const InputComponent = (props) => {

    let errorMessage = '';
    if (props.required || props.validationError) {
        errorMessage = props.validationErrorMessage;
    }

    if (props.serverError) {
        errorMessage = props.serverErrorMessage;
    }

    return (
        <div className="form-group">
            <div className={`${props.gridClassName}${(props.serverError || props.validationError || props.required) ? ' has-error ' : ''}`}>
                <label className={props.labelClassName} htmlFor={props.id}>{props.label}</label>
                <input className={props.fieldClassName}
                       id={props.id} type={props.type} placeholder={props.placeholder}
                       value={props.value} onChange={props.onChange}
                />
                { errorMessage !== '' ? <span className="error text-danger">{errorMessage}</span> : '' }

            </div>
        </div>
    );
}

export default InputComponent;


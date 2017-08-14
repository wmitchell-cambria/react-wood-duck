import React from 'react';

const Button = (props) => {

    const btnClass = `btn btn-${props.btnClassName}`;
    return (
        <div className="row">
            <button className={btnClass} disabled={props.disabled}>
                {props.btnName}
            </button>
        </div>
    );
}

export default Button;
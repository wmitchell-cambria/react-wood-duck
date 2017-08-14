import React from 'react';

const Alert = (props) => {
    const classField = `alert-message ${props.alertClassName}-message`;
    const faIcons = `fa ${props.faIcon}`;
    return (
        <div className="row">
            <div className="col-xs-12">
                <div className={classField}>
                    <div className="alert-icon">
                        <i className={faIcons}></i>
                    </div>
                    <div className="alert-text">
                        {props.alertMessage}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Alert;
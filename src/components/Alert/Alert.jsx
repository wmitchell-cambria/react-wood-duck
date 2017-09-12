import React from "react";
import Template from "@template";

const Alert = props => {
  const classField = `alert-message ${props.alertClassName}-message`;
  const faIcons = `fa ${props.faIcon}`;
  return (
    <Template>
      <div className="row">
        <div className="col-xs-12">
          <div className={classField}>
            <div className="alert-icon">
              <i className={faIcons} />
            </div>
            <div className="alert-text">{props.alertMessage}</div>
          </div>
        </div>
      </div>
    </Template>
  );
};

module.exports = Alert;
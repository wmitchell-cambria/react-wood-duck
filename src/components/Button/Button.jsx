import React from "react";
import Template from "@template";

const Button = props => {
  const btnClass = `btn btn-${props.btnClassName}`;
  return (
    <Template>
      <div className="row">
        <button className={btnClass} disabled={props.disabled}>
          {props.btnName}
        </button>
      </div>
    </Template>
  );
};

module.exports = Button;

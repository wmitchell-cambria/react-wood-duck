import React from "react";
import Template from "@template";
import Button from '@button';

const Cards = props => (
  <Template>
  <div className="bg-lightest-grey container">
    <div className="card edit double-gap-top">
      <div className="card-header">
        <span>{props.cardHeaderText}</span>
      </div>
      <div className="card-body">
        {props.children}
        <div className="clearfix" />
      </div>
    </div>
  </div>
  </Template>
);

module.exports = Cards;

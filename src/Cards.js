import React from 'react';

const Cards = (props) => (
    <div className="bg-lightest-grey container">
        <div className="card edit double-gap-top">
        <div className="card-header">
            <span>{props.cardHeaderText}</span>
        </div>
        <div className="card-body">
            {props.children}
            <div className="clearfix">
            </div>
        </div>
    </div>
  </div>
);

export default Cards

import React from "react";
import Template from "@template";

const ListItem = props => (
  <Template>
    <div className="list-item">{props.children}</div>
  </Template>
);

module.exports = ListItem;

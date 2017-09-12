import React, { Component } from "react";
import Select from "react-select";
import Template from "@template";

class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "green"
    };
    this.logChange = this.logChange.bind(this);
  }
  logChange(val) {
    console.log("Selected: " + JSON.stringify(val));
    this.setState({ value: val });
  }
  render() {
    const options = [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "three" },
      { value: "four", label: "four" },
      { value: "five", label: "five" }
    ];
    return (
      <Template>
        <div>
          <Select
            multi
            simpleValue
            name="form-field-name"
            value={this.state.value}
            options={options}
            onChange={this.logChange}
          />
        </div>
      </Template>
    );
  }
}

module.exports = MultiSelect;

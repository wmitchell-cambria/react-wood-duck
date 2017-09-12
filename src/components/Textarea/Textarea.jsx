import React from "react";
import Template from "@template";

class TextArea extends React.Component {
  render() {
    return (
      <Template>
        <div className="form-group">
          <div className={this.props.gridClassName}>
            <label className="form-label">{this.props.label}</label>
            <textarea
              className={this.props.labelClassName}
              style={this.props.resize ? null : { resize: "none" }}
              name={this.props.name}
              rows={this.props.rows}
              value={this.props.value}
              onChange={this.props.handleOnChange}
              placeholder={this.props.placeholder}
            />
          </div>
        </div>
      </Template>
    );
  }
}

module.exports = TextArea;

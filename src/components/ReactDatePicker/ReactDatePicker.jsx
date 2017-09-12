import React from "react";
import PropTypes from "prop-types";
import Template from "@template";

import DateTime from "react-datetime";

class ReactDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: ""
    };
  }
  _handleChange = e => {
    this.setState({
      startDate: e._d
    });
  };
  _renderDatePicker = () => {
    return (
      <DateTime
        value={this.state.startDate}
        onChange={e => this._handleChange(e)}
        timeFormat={this.props.timeFormat}
      />
    );
  };
  render() {
    return (
      <Template>
        <div>{this._renderDatePicker()}</div>
      </Template>
    );
  }
}

ReactDatePicker.propTypes = {
  timeFormat: PropTypes.bool
};

ReactDatePicker.defaultProps = {
  timeFormat: false
};

module.exports = ReactDatePicker;

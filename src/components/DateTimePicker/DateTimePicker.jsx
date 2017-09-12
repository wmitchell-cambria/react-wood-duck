import React from "react";
import PropTypes from "prop-types";
import DateTime from "react-datetime";
import Template from "@template";

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startDate: "" };
  }
  _handleChange = e => {
    this.setState({ startDate: e._d });
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

DateTimePicker.propTypes = {
  timeFormat: PropTypes.bool
};

DateTimePicker.defaultProps = {
  timeFormat: true
};

module.exports = DateTimePicker;

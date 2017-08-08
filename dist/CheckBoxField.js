(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react);
    global.CheckBoxField = mod.exports;
  }
})(this, function (_react) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var CheckboxField = function CheckboxField(_ref) {
    var gridClassName = _ref.gridClassName,
        label = _ref.label,
        id = _ref.id,
        value = _ref.value,
        checked = _ref.checked,
        disabled = _ref.disabled,
        onChange = _ref.onChange;
    return _react2.default.createElement(
      'div',
      { className: gridClassName },
      _react2.default.createElement('input', { type: 'checkbox',
        id: id,
        value: value,
        checked: checked,
        disabled: disabled,
        onChange: onChange
      }),
      _react2.default.createElement(
        'label',
        { htmlFor: id },
        label
      )
    );
  };
});
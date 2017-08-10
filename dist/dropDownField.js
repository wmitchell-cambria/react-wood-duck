(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.DropDownField = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DropDown = function DropDown(_ref) {
    var gridClassName = _ref.gridClassName,
        value = _ref.value,
        disable = _ref.disable,
        selectClassName = _ref.selectClassName,
        optionList = _ref.optionList,
        onChange = _ref.onChange,
        label = _ref.label;
    return _react2.default.createElement(
      'div',
      { className: gridClassName },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(
        'select',
        { value: value, disabled: disable, onChange: onChange, className: selectClassName },
        !disable && _react2.default.createElement('option', { key: '', value: '' }),
        optionList.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item.id, value: item.id },
            item.value
          );
        })
      )
    );
  };
  DropDown.PropTypes = {
    value: _react2.default.PropTypes.string
  };

  var DropDownField = function (_React$Component) {
    _inherits(DropDownField, _React$Component);

    function DropDownField() {
      _classCallCheck(this, DropDownField);

      return _possibleConstructorReturn(this, (DropDownField.__proto__ || Object.getPrototypeOf(DropDownField)).apply(this, arguments));
    }

    _createClass(DropDownField, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(DropDown, {
            value: '3',
            optionList: [{ value: 'choice1', id: 1 }, { value: 'choice2', id: 2 }, { value: 'select', id: 3 }]
          })
        );
      }
    }]);

    return DropDownField;
  }(_react2.default.Component);

  exports.default = DropDownField;
});
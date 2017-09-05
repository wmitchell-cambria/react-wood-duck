(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', 'prop-types', 'react-datetime'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('prop-types'), require('react-datetime'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.propTypes, global.reactDatetime);
        global.ReactDatePicker = mod.exports;
    }
})(this, function (exports, _react, _propTypes, _reactDatetime) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

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

    var ReactDatePicker = function (_React$Component) {
        _inherits(ReactDatePicker, _React$Component);

        function ReactDatePicker(props) {
            _classCallCheck(this, ReactDatePicker);

            var _this = _possibleConstructorReturn(this, (ReactDatePicker.__proto__ || Object.getPrototypeOf(ReactDatePicker)).call(this, props));

            _this._handleChange = function (e) {
                _this.setState({
                    startDate: e._d
                });
            };

            _this._renderDatePicker = function () {
                return _react2.default.createElement(_reactDatetime2.default, {
                    value: _this.state.startDate,
                    onChange: function onChange(e) {
                        return _this._handleChange(e);
                    },
                    timeFormat: _this.props.timeFormat

                });
            };

            _this.state = {
                startDate: ''
            };
            return _this;
        }

        _createClass(ReactDatePicker, [{
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    this._renderDatePicker()
                );
            }
        }]);

        return ReactDatePicker;
    }(_react2.default.Component);

    ReactDatePicker.propTypes = {
        timeFormat: _propTypes2.default.bool

    };

    ReactDatePicker.defaultProps = {
        timeFormat: false
    };

    exports.default = ReactDatePicker;
});
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.TextArea = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var TextArea = function TextArea(props) {
        return _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
                "div",
                { className: props.gridClassName },
                _react2.default.createElement(
                    "label",
                    { className: "form-label" },
                    props.label
                ),
                _react2.default.createElement("textarea", {
                    className: props.labelClassName,
                    style: props.resize ? null : { resize: 'none' },
                    name: props.name,
                    rows: props.rows,
                    value: props.value,
                    onChange: props.handleOnChange,
                    placeholder: props.placeholder })
            )
        );
    };

    TextArea.propTypes = {
        label: _react2.default.PropTypes.string.isRequired,
        rows: _react2.default.PropTypes.number.isRequired,
        name: _react2.default.PropTypes.string.isRequired,
        value: _react2.default.PropTypes.string.isRequired,
        resize: _react2.default.PropTypes.bool,
        placeholder: _react2.default.PropTypes.string,
        handleOnChange: _react2.default.PropTypes.func.isRequired
    };

    exports.default = TextArea;
});
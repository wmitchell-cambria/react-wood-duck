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
        global.DatePicker = mod.exports;
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

    var DatePicker = function DatePicker(_ref) {
        var gridClassName = _ref.gridClassName,
            fieldClassName = _ref.fieldClassName,
            labelClassName = _ref.labelClassName,
            id = _ref.id,
            label = _ref.label,
            onChange = _ref.onChange,
            value = _ref.value,
            placeholder = _ref.placeholder,
            type = _ref.type;
        return _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
                "div",
                { className: gridClassName },
                _react2.default.createElement(
                    "label",
                    { className: labelClassName, htmlFor: id },
                    label
                ),
                _react2.default.createElement("input", { className: fieldClassName, pattern: "[0-9]{2}-[0-9]{2}-[0-9]{4}",
                    id: id, type: "date", placeholder: placeholder, value: value, onChange: onChange
                })
            )
        );
    };

    exports.default = DatePicker;
});
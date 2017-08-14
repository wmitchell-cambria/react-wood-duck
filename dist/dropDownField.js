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
        global.DropDownField = mod.exports;
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

    var DropDownField = function DropDownField(props) {
        return _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
                "div",
                { className: props.gridClassName },
                _react2.default.createElement(
                    "label",
                    null,
                    props.label
                ),
                _react2.default.createElement(
                    "select",
                    {
                        name: props.name,
                        value: props.selectedOption,
                        onChange: props.handleOnChange,
                        className: props.selectClassName,
                        disabled: props.disable
                    },
                    _react2.default.createElement(
                        "option",
                        { value: "" },
                        props.placeholder
                    ),
                    props.options.map(function (opt) {
                        return _react2.default.createElement(
                            "option",
                            {
                                key: opt,
                                value: opt },
                            opt
                        );
                    })
                )
            )
        );
    };

    DropDownField.propTypes = {
        name: _react2.default.PropTypes.string.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        selectedOption: _react2.default.PropTypes.string,
        handleOnChange: _react2.default.PropTypes.func.isRequired,
        placeholder: _react2.default.PropTypes.string
    };

    exports.default = DropDownField;
});
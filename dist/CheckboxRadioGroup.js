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
        global.CheckboxRadioGroup = mod.exports;
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

    var CheckboxRadioGroup = function CheckboxRadioGroup(props) {
        return _react2.default.createElement(
            "fieldset",
            { className: "fieldset-inputs sans col-md-4 col-sm-6 col-xs-12" },
            _react2.default.createElement(
                "legend",
                { className: "sr-only" },
                props.label
            ),
            props.options.map(function (opt) {
                return _react2.default.createElement(
                    "label",
                    { key: opt },
                    _react2.default.createElement("input", {
                        className: props.fieldClassName,
                        name: props.name,
                        onChange: props.handleOnChange,
                        value: opt,
                        checked: props.selectedOptions.indexOf(opt) > -1,
                        type: props.type }),
                    _react2.default.createElement(
                        "span",
                        null,
                        opt
                    )
                );
            })
        );
    };

    CheckboxRadioGroup.propTypes = {
        label: _react2.default.PropTypes.string.isRequired,
        type: _react2.default.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
        name: _react2.default.PropTypes.string.isRequired,
        options: _react2.default.PropTypes.array.isRequired,
        selectedOptions: _react2.default.PropTypes.array,
        handleOnChange: _react2.default.PropTypes.func.isRequired
    };

    exports.default = CheckboxRadioGroup;
});
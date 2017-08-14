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
        global.Alert = mod.exports;
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

    var Alert = function Alert(props) {
        var classField = "alert-message " + props.alertClassName + "-message";
        var faIcons = "fa " + props.faIcon;
        return _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
                "div",
                { className: "col-xs-12" },
                _react2.default.createElement(
                    "div",
                    { className: classField },
                    _react2.default.createElement(
                        "div",
                        { className: "alert-icon" },
                        _react2.default.createElement("i", { className: faIcons })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "alert-text" },
                        props.alertMessage
                    )
                )
            )
        );
    };

    exports.default = Alert;
});
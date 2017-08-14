(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.InputComponent = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /* Attached Prop fields
    * gridClassName, fieldClassName,labelClassName, id, label, onChange,
    * value,placeholder, type, serverError, serverErrorMessage, validationError,validationErrorMessage, required
    *
    * */

    var InputComponent = function InputComponent(props) {

        var errorMessage = '';
        if (props.required || props.validationError) {
            errorMessage = props.validationErrorMessage;
        }

        if (props.serverError) {
            errorMessage = props.serverErrorMessage;
        }

        return _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
                'div',
                { className: '' + props.gridClassName + (props.serverError || props.validationError || props.required ? ' has-error ' : '') },
                _react2.default.createElement(
                    'label',
                    { className: props.labelClassName, htmlFor: props.id },
                    props.label
                ),
                _react2.default.createElement('input', { className: props.fieldClassName,
                    id: props.id, type: props.type, placeholder: props.placeholder,
                    value: props.value, onChange: props.onChange
                }),
                errorMessage !== '' ? _react2.default.createElement(
                    'span',
                    { className: 'error text-danger' },
                    errorMessage
                ) : ''
            )
        );
    };

    exports.default = InputComponent;
});
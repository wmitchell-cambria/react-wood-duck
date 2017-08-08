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

	var DatePick = function DatePick(_ref) {
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
			{ className: gridClassName },
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"label",
					{ className: labelClassName, htmlFor: id },
					label
				),
				_react2.default.createElement("input", { className: fieldClassName, id: id, type: "date", placeholder: placeholder, value: value, onChange: onChange })
			)
		);
	};

	var DatePicker = function (_React$Component) {
		_inherits(DatePicker, _React$Component);

		function DatePicker() {
			_classCallCheck(this, DatePicker);

			return _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(this, arguments));
		}

		_createClass(DatePicker, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(DatePick, {
						gridClassName: "col-md-4 col-sm-6 col-xs-12",
						fieldClassName: "form-control",
						label: "Date Picker",
						placeholder: "mm-dd-yyyy"
					})
				);
			}
		}]);

		return DatePicker;
	}(_react2.default.Component);

	exports.default = DatePicker;
});
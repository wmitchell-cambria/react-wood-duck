(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["module", "react", "prop-types"], factory);
	} else if (typeof exports !== "undefined") {
		factory(module, require("react"), require("prop-types"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod, global.react, global.propTypes);
		global.SideNav = mod.exports;
	}
})(this, function (module, _react, _propTypes) {
	"use strict";

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

	var SideNav = function (_React$Component) {
		_inherits(SideNav, _React$Component);

		function SideNav(props) {
			_classCallCheck(this, SideNav);

			return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call(this, props));
		}

		_createClass(SideNav, [{
			key: "render",
			value: function render() {
				var classField = "container col-md-" + this.props.columnWidth;
				if (!this.props.content) {
					return null;
				} else {
					return _react2.default.createElement(
						"div",
						{ className: classField },
						_react2.default.createElement(
							"div",
							{ className: "row" },
							_react2.default.createElement(
								"ul",
								{ className: "nav nav-stacked" },
								_react2.default.createElement(
									"li",
									{ className: "active" },
									_react2.default.createElement(
										"a",
										{ href: "#" },
										"Test Item 0"
									)
								),
								_react2.default.createElement(
									"li",
									null,
									_react2.default.createElement(
										"a",
										{ href: "#" },
										"Test Item 1"
									)
								),
								_react2.default.createElement(
									"li",
									null,
									_react2.default.createElement(
										"a",
										{ href: "#" },
										"Test Item 2"
									)
								)
							)
						)
					);
				}
			}
		}]);

		return SideNav;
	}(_react2.default.Component);

	SideNav.PropTypes = {
		content: _propTypes2.default.string,
		columnWidth: _propTypes2.default.number
	};

	SideNav.defaultProps = {
		content: "",
		columnWidth: 3
	};

	module.exports = SideNav;
});
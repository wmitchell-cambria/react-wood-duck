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
    global.Nav = mod.exports;
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

  var Nav = function (_Component) {
    _inherits(Nav, _Component);

    function Nav(props) {
      _classCallCheck(this, Nav);

      var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

      _this.state = {
        showNavBar: true,
        showLeftSide: true
      };
      _this.renderNav = _this.renderNav.bind(_this);
      _this.onNavshow = _this.onNavshow.bind(_this);
      _this.showLeftItems = _this.showLeftItems.bind(_this);
      return _this;
    }

    _createClass(Nav, [{
      key: "onNavshow",
      value: function onNavshow() {
        var showNavBar = this.state.showNavBar;

        this.setState({
          showNavBar: !showNavBar
        });
      }
    }, {
      key: "renderNav",
      value: function renderNav() {
        if (this.state.showNavBar) {
          return _react2.default.createElement("nav", { className: "navbar col-xs-12" });
        }
        return null;
      }
    }, {
      key: "showLeftItems",
      value: function showLeftItems() {
        if (this.state.showLeftSide) {
          return _react2.default.createElement(
            "div",
            { className: "nav-bar  col-md-2 col-sm-2 col-xs-12" },
            _react2.default.createElement(
              "button",
              { onClick: this.onNavshow, className: "menu-button hidden-xs" },
              _react2.default.createElement("span", { className: this.state.showNavBar ? 'glyphicon glyphicon-remove menu-remove' : 'glyphicon glyphicon-menu-hamburger menu-add' })
            ),
            this.renderNav()
          );
        }return null;
      }
    }, {
      key: "render",
      value: function render() {

        return _react2.default.createElement(
          "div",
          null,
          this.showLeftItems()
        );
      }
    }]);

    return Nav;
  }(_react.Component);

  Nav.propTypes = {
    showLeftNav: _react.PropTypes.func
  };
  exports.default = Nav;
});
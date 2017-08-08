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
    global.Header = mod.exports;
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

  var cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000
  };
  var Header = function Header(_ref) {
    var showMenuBar = _ref.showMenuBar,
        showLeftNavBar = _ref.showLeftNavBar;
    return _react2.default.createElement(
      'div',
      { className: 'App-header' },
      _react2.default.createElement(
        'button',
        { className: !showMenuBar ? "menu-button visible-xs" : "menu-button", onClick: showLeftNavBar },
        _react2.default.createElement('span', { className: 'glyphicon glyphicon-menu-hamburger menu-add' })
      ),
      'Primary Navigation'
    );
  };

  exports.default = Header;
});
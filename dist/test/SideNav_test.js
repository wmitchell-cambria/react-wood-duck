(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['react', '../SideNav.js', 'react-dom/lib/ReactTestUtils'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('react'), require('../SideNav.js'), require('react-dom/lib/ReactTestUtils'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.react, global.SideNav, global.ReactTestUtils);
		global.SideNav_test = mod.exports;
	}
})(this, function (_react, _SideNav, _ReactTestUtils) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _SideNav2 = _interopRequireDefault(_SideNav);

	var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	describe('Side Nav', function () {
		var renderer = _ReactTestUtils2.default.createRenderer();
		it('returns null when content is empty', function () {
			var componentRendered = renderer.render(_react2.default.createElement(_SideNav2.default, { content: '' }));
			var resultTag = renderer.getRenderOutput();
			expect(resultTag).toBe(null);
		});

		it('returns side nav element when content is not empty', function () {
			var componentRendered = renderer.render(_react2.default.createElement(_SideNav2.default, { content: 'a' }));
			var resultTag = renderer.getRenderOutput();
			expect(resultTag).not.toBe(null);
			expect(resultTag.type).toBe('div');
		});

		it('returns side nav element with default column width when columnWidth is not provided', function () {
			var componentRendered = renderer.render(_react2.default.createElement(_SideNav2.default, { content: 'a' }));
			var resultTag = renderer.getRenderOutput();
			expect(resultTag.props.className).toBe('container col-md-3');
		});

		it('returns side nav element with specified column width', function () {
			var componentRendered = renderer.render(_react2.default.createElement(_SideNav2.default, { content: 'a', columnWidth: 4 }));
			var resultTag = renderer.getRenderOutput();
			expect(resultTag.props.className).toBe('container col-md-4');
			alert;
		});
	});
});
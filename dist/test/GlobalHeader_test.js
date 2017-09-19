(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['react', '../GlobalHeader.js', 'react-dom/lib/ReactTestUtils'], factory);
	} else if (typeof exports !== "undefined") {
		factory(require('react'), require('../GlobalHeader.js'), require('react-dom/lib/ReactTestUtils'));
	} else {
		var mod = {
			exports: {}
		};
		factory(global.react, global.GlobalHeader, global.ReactTestUtils);
		global.GlobalHeader_test = mod.exports;
	}
})(this, function (_react, _GlobalHeader, _ReactTestUtils) {
	'use strict';

	var _react2 = _interopRequireDefault(_react);

	var _GlobalHeader2 = _interopRequireDefault(_GlobalHeader);

	var _ReactTestUtils2 = _interopRequireDefault(_ReactTestUtils);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	describe('Global Header', function () {
		var renderedComp = _ReactTestUtils2.default.createRenderer();
		var compRendered = renderedComp.render(_react2.default.createElement(_GlobalHeader2.default, null));
		var result_tag = renderedComp.getRenderOutput();

		it('renders the tag', function () {
			expect(result_tag.type).toBe('header');
		});

		it('verify the className', function () {
			expect(result_tag.props.className).toBe('container-fluid');
		});
	});
});
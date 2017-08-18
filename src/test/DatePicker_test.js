import React from 'react';
import DatePicker from '../DatePicker.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('DatePicker', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<DatePicker />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('div')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('form-group')
	})

})
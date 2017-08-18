import React from 'react';
import Button from '../Button.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Button', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<Button />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('div')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('row')
	})

})
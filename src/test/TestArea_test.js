import React from 'react';
import TextArea from '../TextArea.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('TextArea', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<TextArea />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('div')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('form-group')
	})

})
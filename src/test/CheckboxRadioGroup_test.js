import React from 'react';
import CheckboxRadioGroup from '../CheckboxRadioGroup.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('CheckboxRadioGroup', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<CheckboxRadioGroup />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('fieldset')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('fieldset-inputs sans col-md-4 col-sm-6 col-xs-12')
	})

})
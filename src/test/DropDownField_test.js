import React from 'react';
import DropDownField from '../DropDownField.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = {name:"hi", options:[]};

describe('DropDownField', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<DropDownField {...props}/>)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('div')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('form-group')
	})

})
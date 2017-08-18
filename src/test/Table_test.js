import React from 'react';
import Table from '../Table.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Table', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<Table />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('table')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('table table-hover table-striped')
	})

})
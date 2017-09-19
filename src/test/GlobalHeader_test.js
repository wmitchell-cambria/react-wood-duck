import React from 'react';
import GlobalHeader from '../GlobalHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Global Header', function()
{
	const renderedComp = TestUtils.createRenderer()
	const compRendered = renderedComp.render(<GlobalHeader />)
	const result_tag = renderedComp.getRenderOutput()

	it('renders the tag', function() {
		expect(result_tag.type).toBe('header')
	})

	it('verify the className', function(){
		expect(result_tag.props.className). toBe('container-fluid')
	})

})
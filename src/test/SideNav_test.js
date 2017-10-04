import React from 'react';
import SideNav from '../SideNav.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Side Nav', function() 
{
	const renderer = TestUtils.createRenderer()
	it('returns null when content is empty', function() {
		const componentRendered = renderer.render(<SideNav content=""/>)
                const resultTag = renderer.getRenderOutput()
		expect(resultTag).toBe(null);
	}) 

	it('returns side nav element when content is not empty', function() {
		const componentRendered = renderer.render(<SideNav content="a"/>)
		const resultTag = renderer.getRenderOutput()
		expect(resultTag).not.toBe(null)
		expect(resultTag.type).toBe('div')
	})

	it('returns side nav element with default column width when columnWidth is not provided', function() {
		const componentRendered = renderer.render(<SideNav content="a" />)
		const resultTag = renderer.getRenderOutput()
		expect(resultTag.props.className).toBe('container col-md-3')
	})

	it('returns side nav element with specified column width', function() {
		const componentRendered = renderer.render(<SideNav content="a" columnWidth={4} />)
		const resultTag = renderer.getRenderOutput()
		expect(resultTag.props.className).toBe('container col-md-4')
		alert 
	})
})

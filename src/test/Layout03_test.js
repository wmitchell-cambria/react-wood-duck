import React from 'react';
import Layout03 from '../Layout03.js';
import SideNav from '../SideNav.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

describe('Layout03', function() {
  const sideNavContent = [
      {
      type: 'navLinks',
      navItems: [
        {
          type: 'navLink',
          text: 'Tommy Cambell',
          href: '#',
          preIcon: 'fa fa-user',
        },
        {
          type: 'navLink',
          text: 'Aubrey Cambell',
          href: '#',
          preIcon: 'fa fa-user',
        },
        {
          type: 'navLink',
          text: 'Chris Cambell',
          href: '#',
          preIcon: 'fa fa-user',
        },
      ],
      },
    ];
  const sideNavColumnWidth = 3;

  const sideNavProps = {content: sideNavContent, columnWidth: sideNavColumnWidth};

  it('renders the tag', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Layout03 />);
    const resultTag = renderer.getRenderOutput();
    expect(resultTag.type).toBe('div');
  });
 
  it('includes Global Header, Page Header and Side Nav components', function() {
    const layout = TestUtils.renderIntoDocument(<Layout03 sideNavContent={sideNavContent} sideNavColumnWidth={sideNavColumnWidth} />);
    expect(
      TestUtils.findRenderedComponentWithType(layout, GlobalHeader)
    ).toBeTruthy();
    expect(
      TestUtils.findRenderedComponentWithType(layout, PageHeader)
    ).toBeTruthy();
    expect(
      TestUtils.findRenderedComponentWithType(layout, SideNav)
    ).toBeTruthy();
  });

  it('includes Side Nav Component with given properties', function() {
    const layout = TestUtils.renderIntoDocument(<Layout03 sideNavContent={sideNavContent} sideNavColumnWidth={sideNavColumnWidth} />);
    const sideNavComponent = TestUtils.findRenderedComponentWithType(layout, SideNav);
    expect(sideNavComponent.props.content).toEqual(sideNavContent);
    expect(sideNavComponent.props.columnWidth).toEqual(sideNavColumnWidth);
  })
});

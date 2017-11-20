import React from 'react';
import Layout03 from '../Layout03.js';
import SideNav from '../SideNav.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('Layout03', function() {
  const sideNavContent = [
    {
      type: 'navLinks',
      navItems: [
        {
          type: 'navLink',
          text: 'Tommy Cambell',
          href: '#tom',
          preIcon: 'fa fa-user',
        },
        {
          type: 'navLink',
          text: 'Aubrey Cambell',
          href: '#aub',
          preIcon: 'fa fa-user',
        },
        {
          type: 'navLink',
          text: 'Chris Cambell',
          href: '#chris',
          preIcon: 'fa fa-user',
        },
      ],
    },
  ];
  const wrapper = shallow(<Layout03 />);

  it('contains matching elements', () => {
    expect(wrapper.containsMatchingElement(<PageHeader />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<GlobalHeader />)).toEqual(true);
    expect(
      wrapper.containsMatchingElement(<SideNav content={sideNavContent} />)
    ).toEqual(true);
  });
});

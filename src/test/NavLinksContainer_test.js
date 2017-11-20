import React from 'react';
import NavLinksContainer from '../NavLinksContainer';
import NavLinks from '../NavLinks';

import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('NavLinksContainer', () => {
  describe('given empty navigation links', function() {
    const emptyNavLinks = [];
    const resultTag = shallow(<NavLinksContainer navLinks={emptyNavLinks} />);

    it('renders NavLinks Component', () => {
      expect(resultTag.type()).toBe(NavLinks);
    });

    it('renders NavLinks component with empty navLinks property', () => {
      expect(resultTag.props().navLinks).toEqual(emptyNavLinks);
    });

    it('renders NavLinks component with null activeNavLinkHref', () => {
      expect(resultTag.props().activeNavLinkHref).toBe(null);
    });
  });

  describe('given navigation links', () => {
    const simpleNavLinks = [
      {
        type: 'navLink',
        text: 'Tommy Cambell',
        href: '#tommy',
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
    ];
    const resultTag = shallow(<NavLinksContainer navLinks={simpleNavLinks} />);

    it('renders NavLinks component with give navLinks property', () => {
      expect(resultTag.type()).toBe(NavLinks);
      expect(resultTag.props().navLinks).toEqual(simpleNavLinks);
    });

    it('renders NavLinks component with first NavLink as active NavLink', () => {
      expect(resultTag.props().activeNavLinkHref).toBe(simpleNavLinks[0].href);
    });

    it('renders NavLinks component with a nav link click handler', () => {
      expect(resultTag.props().handleClick).toBeTruthy();
    });
  });
});

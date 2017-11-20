import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import NavLink from '../NavLink';
import NavLinks from '../NavLinks';

describe('NavLinks', () => {
  const simpleNavLinks = [
    {
      type: 'navLink',
      text: 'Tommy Cambell',
      href: '#tm',
      preIcon: 'fa fa-user',
    },
    {
      type: 'navLink',
      text: 'Aubrey Cambell',
      href: '#au',
      preIcon: 'fa fa-user',
    },
  ];
  const navLinksWithSubNavLinks = [
    {
      type: 'navLink',
      text: 'Screener Summary',
      href: '#summary',
      className: '',
    },
    {
      type: 'navLinkWithInnerNav',
      text: 'People & Roles',
      href: '#ppl',
      navItems: [
        {
          type: 'navLink',
          text: 'Tommy Cambell',
          href: '#tom',
          preIcon: 'fa fa-user',
          postIcon: 'fa fa-exclamation-triangle c-red',
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
          href: '#chr',
          preIcon: 'fa fa-user',
        },
      ],
    },
  ];
  const clickHandler = () => {
    console.log('test msg');
  };

  describe('given empty navigation links', () => {
    const nullNavLinksComponent = shallow(<NavLinks navLinks={[]} />);

    it('renders No nav links', () => {
      expect(nullNavLinksComponent.html()).toBe(null);
      expect(nullNavLinksComponent.children().length).toBe(0);
    });
  });

  describe('given simple navigation links', () => {
    const simpleNavLinksComponent = shallow(
      <NavLinks
        navLinks={simpleNavLinks}
        handleClick={clickHandler}
        activeNavLinkHref={simpleNavLinks[0].href}
        indentationLevel={0}
      />
    );
    const simpleNavLinksResultTag = simpleNavLinksComponent.find('ul');

    it('simple Navigation Links are wrapped in ul tag', () => {
      expect(simpleNavLinksComponent.html()).not.toBe(null);
      expect(simpleNavLinksResultTag.type()).toBe('ul');
      expect(simpleNavLinksResultTag.props().className).toBe('nav nav-stacked');
      expect(simpleNavLinksResultTag.children().length).toBe(2);
    });

    it('renders simple navigation links', () => {
      expect(simpleNavLinksResultTag.props().children).toEqual([
        <NavLink
          key={simpleNavLinks[0].text}
          text={simpleNavLinks[0].text}
          href={simpleNavLinks[0].href}
          preIcon={simpleNavLinks[0].preIcon}
          postIcon={simpleNavLinks[0].postIcon}
          handleClick={clickHandler}
          active={true}
          indentationLevel={0}
        >
          {null}
        </NavLink>,
        <NavLink
          key={simpleNavLinks[1].text}
          text={simpleNavLinks[1].text}
          href={simpleNavLinks[1].href}
          preIcon={simpleNavLinks[1].preIcon}
          postIcon={simpleNavLinks[1].postIcon}
          handleClick={clickHandler}
          active={false}
          indentationLevel={0}
        >
          {null}
        </NavLink>,
      ]);
    });
  });

  describe('given nested navigation links', () => {
    const navLinksWithSubNavLinksComponent = shallow(
      <NavLinks
        navLinks={navLinksWithSubNavLinks}
        handleClick={clickHandler}
        activeNavLinkHref={navLinksWithSubNavLinks[0].href}
        indentationLevel={0}
      />
    );
    const navLinksWithSubNavLinksResultTag = navLinksWithSubNavLinksComponent.find(
      'ul'
    );

    it('renders nested navigation links', function() {
      expect(navLinksWithSubNavLinksComponent.html()).not.toBe(null);
      expect(navLinksWithSubNavLinksResultTag.type()).toBe('ul');
      expect(navLinksWithSubNavLinksResultTag.children().length).toBe(2);
      expect(navLinksWithSubNavLinksResultTag.props().children).toEqual([
        <NavLink
          key={navLinksWithSubNavLinks[0].text}
          text={navLinksWithSubNavLinks[0].text}
          href={navLinksWithSubNavLinks[0].href}
          preIcon={navLinksWithSubNavLinks[0].preIcon}
          postIcon={navLinksWithSubNavLinks[0].postIcon}
          handleClick={clickHandler}
          active={true}
          indentationLevel={0}
        >
          {null}
        </NavLink>,
        <NavLink
          key={navLinksWithSubNavLinks[1].text}
          text={navLinksWithSubNavLinks[1].text}
          href={navLinksWithSubNavLinks[1].href}
          preIcon={navLinksWithSubNavLinks[1].preIcon}
          postIcon={navLinksWithSubNavLinks[1].postIcon}
          handleClick={clickHandler}
          active={false}
          indentationLevel={0}
        >
          <NavLinks
            navLinks={navLinksWithSubNavLinks[1].navItems}
            handleClick={clickHandler}
            activeNavLinkHref={navLinksWithSubNavLinks[0].href}
            indentationLevel={1}
          />
        </NavLink>,
      ]);
    });
  });
});

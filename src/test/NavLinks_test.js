import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';
import NavLink from '../NavLink';
import NavLinks from '../NavLinks';

describe('NavLinks', function() {
  const clickHandler = function() {
    console.log('test msg');
  };
  const simpleNavLinks = [
    <NavLink
      text="Tommy Cambell"
      href="#tm"
      preIcon="fa fa-user"
      handleClick={clickHandler}
      active={true}
      key={1}
    />,
    <NavLink
      text="Aubrey Cambell"
      href="#au"
      preIcon="fa fa-user"
      handleClick={clickHandler}
      key={2}
    />,
  ];
  const nestedNavLinks = [
    <NavLink text="Screener Summary" href="#summary" key={1} />,
    <NavLink text="People & Roles" href="#ppl" key={2}>
      <NavLinks nested={true}>
        <NavLink
          text="Tommy Cambell"
          href="#tom"
          preIcon="fa fa-user"
          postIcon="fa fa-exclamation-triangle c-red"
          indentationLevel={1}
          key={1}
        />
        <NavLink
          text="Aubrey Cambell"
          href="#aub"
          preIcon="fa fa-user"
          indentationLevel={1}
          key={2}
        />
        <NavLink
          text="Chris Cambell"
          href="#chr"
          preIcon="fa fa-user"
          indentationLevel={1}
          key={3}
        />
      </NavLinks>
    </NavLink>,
  ];

  describe('given empty navigation links', () => {
    const nullNavLinksComponent = shallow(<NavLinks />);

    it('renders No nav links', () => {
      expect(nullNavLinksComponent.html()).toBe(null);
      expect(nullNavLinksComponent.children().length).toBe(0);
    });
  });

  describe('given simple navigation links', () => {
    const simpleNavLinksComponent = shallow(
      <NavLinks>{simpleNavLinks}</NavLinks>
    );
    const simpleNavLinksResultTag = simpleNavLinksComponent.find('ul');

    it('NavLinks are wrapped in nav element', () => {
      const simpleNavLinksDiv = simpleNavLinksComponent.find('.row');
      expect(simpleNavLinksDiv.length).toBe(1);
      expect(simpleNavLinksDiv.props().className).toBe('row');
      expect(simpleNavLinksDiv.props().role).toBe('navigation');
    });

    it('Navigation Links are wrapped in ul tag', () => {
      expect(simpleNavLinksResultTag.type()).toBe('ul');
      expect(simpleNavLinksResultTag.props().className).toBe('nav nav-stacked');
      expect(simpleNavLinksResultTag.children().length).toBe(2);
    });

    it('renders simple navigation links', () => {
      expect(simpleNavLinksResultTag.props().children).toEqual(simpleNavLinks);
    });
  });

  describe('given nested navigation links', () => {
    const nestedNavLinksComponent = shallow(
      <NavLinks>{nestedNavLinks}</NavLinks>
    );

    it('renders only one nav element', () => {
      expect(nestedNavLinksComponent.filter('.row').length).toBe(1);
    });

    it('renders nested navigation links', () => {
      const nestedNavLinksResultTag = nestedNavLinksComponent.find('ul');
      expect(nestedNavLinksResultTag.children().length).toBe(2);
      expect(nestedNavLinksResultTag.props().children).toEqual(nestedNavLinks);
    });
  });
});

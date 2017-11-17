import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import PreIcon from '../PreIcon';
import PostIcon from '../PostIcon';
import NavLink from '../NavLink';

describe('NavLink', () => {
  const navLinkHref = 'test.html';
  const navLinkText = 'Nav Link Test';
  const navLinkClass = 'navlink';
  const preIconProp = 'fa fa-user';
  const postIconProp = 'fa icon-warning-sign';
  const postIconClass = 'post-navlink-icon';
  const indentationLevel = 2;

  const activeNavLinkClass = 'active-navlink';
  const inactiveNavLinkClass = 'inactive-navlink';
  const indentationClassName = `indent-level${indentationLevel}`;

  describe('basic', () => {
    const inactiveBasicNavLink = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        indentationLevel={indentationLevel}
        onClick={() => {}}
      />
    );
    const inst = inactiveBasicNavLink.instance();

    it('has all the props', () => {
      expect(inst.props.text).toBe(navLinkText);
      expect(inst.props.href).toBe(navLinkHref);
      expect(inst.props.indentationLevel).toBe(indentationLevel);
    });

    it('is inactive by default', () => {
      expect(inst.props.active).toBe(false);
      expect(
        inactiveBasicNavLink.filterWhere(n => n.hasClass(inactiveNavLinkClass))
      ).toBeTruthy();
    });

    it('has li element', () => {
      const liElement = inactiveBasicNavLink.find('li');
      expect(liElement.hasClass(navLinkClass)).toBe(true);
    });

    it('has anchor element', () => {
      const anchorElement = inactiveBasicNavLink.find('a');
      expect(anchorElement.text()).toBe(navLinkText);
      expect(anchorElement.props().href).toEqual(navLinkHref);
      expect(anchorElement.props().className).toBe('');
    });

    it('has valid indentation style', () => {
      expect(inactiveBasicNavLink.find(indentationClassName)).toBeTruthy();
    });

    it('has pre icon component', () => {
      expect(inactiveBasicNavLink.containsMatchingElement(<PreIcon />)).toBe(true);
    });

    it('has post icon component', () => {
      expect(inactiveBasicNavLink.containsMatchingElement(<PostIcon />)).toBe(true);
    });
  });

  describe('with PreIcon', () => {
    const navLinkWithPreIcon = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconProp}
        indentationLevel={indentationLevel}
        onClick={() => {}}
      />
    );

    it('renders pre icon component with given preIcon property', () => {
      expect(navLinkWithPreIcon.containsMatchingElement(<PreIcon icon={preIconProp} />)).toBe(true);
    });
  });

  describe('with PostIcon', () => {
    const navLinkWithPostIcon = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        postIcon={postIconProp}
        indentationLevel={indentationLevel}
        onClick={() => {}}
      />
    );
 
    it('renders post icon component with given postIcon property', () => {
      expect(navLinkWithPostIcon.containsMatchingElement(<PostIcon icon={postIconProp} />)).toBe(true);
    });
  });

  describe('with child components', function() {
    const navLinkWithChildren = shallow(
      <NavLink href={navLinkHref} text={navLinkText}>
        <div>Test Child</div>
      </NavLink>
    );
    const liElement = navLinkWithChildren.find('li');

    it('has basic elements', function() {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has given child components', function() {
      expect(navLinkWithChildren.contains(<div>Test Child</div>)).toBe(true);
    });
  });

  describe('with active property', function() {
    const activeNavLinkWithPreIcon = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconProp}
        active={true}
      />
    );
    const activeNavLink = activeNavLinkWithPreIcon.filterWhere(n =>
      n.hasClass(activeNavLinkClass)
    );

    it('has active style', function() {
      expect(activeNavLink).toBeTruthy();
    });
  });

  describe('with handleClick callback', function() {
    let clickInstance;
    let navLinkWithClickHandler;
    beforeEach(function() {
      clickInstance = { handleClick: function() {} };
      spyOn(clickInstance, 'handleClick');
      navLinkWithClickHandler = shallow(
        <NavLink
          href={navLinkHref}
          text={navLinkText}
          handleClick={clickInstance.handleClick}
        />
      );
    });

    it('invokes callback on click', function() {
      navLinkWithClickHandler.find('a').simulate('click');
      expect(clickInstance.handleClick).toHaveBeenCalled();
    });
  });
});

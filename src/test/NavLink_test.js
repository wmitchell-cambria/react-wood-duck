import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import NavLink from '../NavLink.js';

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

  describe('basic navlink', () => {
    const inactiveBasicNavLink = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        indentationLevel={indentationLevel}
        active={false}
        onClick={() => {}}
      />
    );
    const inst = inactiveBasicNavLink.instance();

    it('has all the props', () => {
      expect(inst.props.text).toBe(navLinkText);
      expect(inst.props.href).toBe(navLinkHref);
      expect(inst.props.indentationLevel).toBe(indentationLevel);
      expect(inst.props.active).toBe(false);
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

    it('has inactive styling and valid indentation style', () => {
      expect(
        inactiveBasicNavLink.filterWhere(n => n.hasClass(inactiveNavLinkClass))
      ).toBeTruthy();
    });

    it('has valid indentation style', () => {
      expect(inactiveBasicNavLink.find(indentationClassName)).toBeTruthy();
    });

    it('does not have pre & post icon elements', () => {
      const iElements = inactiveBasicNavLink.find('i');
      expect(iElements.length).toBe(0);
    });
  });

  describe('with pre icon property', () => {
    const navLinkWithPreIcon = shallow(
      <NavLink href={navLinkHref} text={navLinkText} preIcon={preIconProp} />
    );
    const liElement = navLinkWithPreIcon.filterWhere(n =>
      n.hasClass(preIconProp)
    );

    it('has basic elements', () => {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has pre icon element', () => {
      expect(
        navLinkWithPreIcon.filterWhere(n => n.hasClass(preIconProp))
      ).toBeTruthy();
    });
  });

  describe('with post icon property', () => {
    const navLinkWithPostIcon = shallow(
      <NavLink href={navLinkHref} text={navLinkText} postIcon={postIconProp} />
    );
    const liElement = navLinkWithPostIcon.find('li');

    it('has basic elements', () => {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has valid post icon element', () => {
      expect(
        navLinkWithPostIcon.filterWhere(n => n.hasClass(postIconProp))
      ).toBeTruthy();
    });

    it('has valid post icon style', () => {
      expect(
        navLinkWithPostIcon.filterWhere(n => n.hasClass(postIconClass))
      ).toBeTruthy();
    });
  });

  describe('with pre & post icon properties', () => {
    const navLinkWithPrePostIcons = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconProp}
        postIcon={postIconProp}
      />
    );
    const liElement = navLinkWithPrePostIcons.find('li');

    it('has basic elements', function() {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has pre & post icons', function() {
      expect(
        navLinkWithPrePostIcons.filterWhere(n => n.hasClass(preIconProp))
      ).toBeTruthy();
      expect(
        navLinkWithPrePostIcons.filterWhere(n => n.hasClass(postIconProp))
      ).toBeTruthy();
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

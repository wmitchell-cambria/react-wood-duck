import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import NavLink from '../NavLink.js';

describe('NavLink', () => {
  const navLinkHref = 'test.html';
  const navLinkText = 'Nav Link Test';
  const navLinkClass = 'navlink';
  const preIconClass = 'fa fa-user';
  const postIconClass = 'fa icon-warning-sign';
  const indentationLevel = 2;

  const activeNavLinkClassName = 'active-navlink';
  const inactiveNavLinkClassName = 'inactive-navlink';

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
    const instance = inactiveBasicNavLink.instance();

    it('is an instance and not null', () => {
      expect(inactiveBasicNavLink).not.toBe(null);
      expect(instance).toEqual(jasmine.any(NavLink));
    });

    it('has all the props', () => {
      expect(instance.props.text).toBe(navLinkText);
      expect(instance.props.href).toBe(navLinkHref);
      expect(instance.props.indentationLevel).toBe(indentationLevel);
      expect(instance.props.active).toBe(false);
    });

    it('has li element', () => {
      const liElement = inactiveBasicNavLink.find('li');

      expect(liElement).not.toBe(null);
      expect(liElement.hasClass(navLinkClass)).toBe(true);
      expect(liElement.length).toBe(1);
      expect(liElement.children().length).toBe(2);
    });

    it('has anchor element', () => {
      const anchorElement = inactiveBasicNavLink.find('a');

      expect(anchorElement.type()).toEqual('a');
      expect(anchorElement.text()).toBe(navLinkText);
      expect(anchorElement.props().href).toEqual(navLinkHref);
      expect(anchorElement.props().className).toBe('');
      expect(anchorElement.onClick).not.toBe(null);
    });

    it('has span element with inactive class name and valid indentation style', () => {
      const spanElement = inactiveBasicNavLink.find('span');

      expect(spanElement.type()).toBe('span');
      expect(spanElement.props().className).toBe(inactiveNavLinkClassName);
      expect(spanElement.props().style).toEqual({ marginRight: '6rem' });
    });

    it('does not have pre & post icon elements', () => {
      const inactiveElements = inactiveBasicNavLink.find('i');
      expect(inactiveElements.length).toBe(0);
    });
  });

  describe('navlink with pre icon property', () => {
    const navLinkWithPreIcon = shallow(
      <NavLink href={navLinkHref} text={navLinkText} preIcon={preIconClass} />
    );
    const instance = navLinkWithPreIcon.instance();
    const liElement = navLinkWithPreIcon.find('li');

    it('is an instance and not null', () => {
      expect(navLinkWithPreIcon).not.toBe(null);
      expect(instance).toEqual(jasmine.any(NavLink));
    });

    it('has basic element', () => {
      expect(liElement.children().length).toBe(3);
      expect(liElement.childAt(0).type()).toBe('span');
      expect(liElement.childAt(1).type()).toBe('i');
      expect(liElement.childAt(2).type()).toBe('a');
    });

    it('navlink has pre icon', () => {
      const preIconElement = liElement.find('i');

      expect(preIconElement.length).toBe(1);
      expect(preIconElement.type()).toBe('i');
      expect(preIconElement.props().className).toBe(preIconClass);
    });
  });

  describe('navlink with post icon property', () => {
    const navLinkWithPostIcon = shallow(
      <NavLink href={navLinkHref} text={navLinkText} postIcon={postIconClass} />
    );
    const instance = navLinkWithPostIcon.instance();
    const liElement = navLinkWithPostIcon.find('li');

    it('is an instance and not null', () => {
      expect(navLinkWithPostIcon).not.toBe(null);
      expect(instance).toEqual(jasmine.any(NavLink));
    });

    it('has basic elements', () => {
      expect(liElement.children().length).toBe(3);
      expect(liElement.childAt(0).type()).toBe('span');
      expect(liElement.childAt(1).type()).toBe('a');
      expect(liElement.childAt(2).type()).toBe('i');
    });

    it('has post icon', () => {
      const postIconElement = liElement.find('i');
      expect(postIconElement.props().className).toContain(postIconClass);
    });
  });

  describe('navlink with pre & post icons', () => {
    const navLinkWithPrePostIcons = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconClass}
        postIcon={postIconClass}
      />
    );
    const instance = navLinkWithPrePostIcons.instance();
    const liElement = navLinkWithPrePostIcons.find('li');

    it('is an instance and not null', () => {
      expect(navLinkWithPrePostIcons).not.toBe(null);
      expect(instance).toEqual(jasmine.any(NavLink));
    });

    it('has basic elements', function() {
      expect(liElement.children().length).toBe(4);
      expect(liElement.childAt(0).type()).toBe('span');
      expect(liElement.childAt(1).type()).toBe('i');
      expect(liElement.childAt(2).type()).toBe('a');
      expect(liElement.childAt(3).type()).toBe('i');
    });

    it('has pre & post icons', function() {
      expect(liElement.children().length).toBe(4);
      expect(liElement.childAt(0).type()).toBe('span');
      expect(liElement.childAt(1).props().className).toBe(preIconClass);
      expect(liElement.childAt(2).type()).toBe('a');
      expect(liElement.childAt(3).props().className).toContain(postIconClass);
    });
  });

  describe('navlink with child components', function() {
    const navLinkWithChildren = shallow(
      <NavLink href={navLinkHref} text={navLinkText}>
        <div>Test Child</div>
      </NavLink>
    );
    const instance = navLinkWithChildren.instance();
    const liElement = navLinkWithChildren.find('li');

    it('is an instance and not null', () => {
      expect(navLinkWithChildren).not.toBe(null);
      expect(instance).toEqual(jasmine.any(NavLink));
    });

    it('has basic elements', function() {
      expect(liElement.children().length).toBe(3);
      expect(liElement.childAt(0).type()).toBe('span');
      expect(liElement.childAt(1).type()).toBe('a');
    });

    it('has given child components', function() {
      expect(liElement.childAt(2).type()).toBe('div');
    });
  });

  describe('navlink with preIcon & active properties', function() {
    const activeNavLinkWithPreIcon = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconClass}
        active={true}
      />
    );
    const activeNavLink = activeNavLinkWithPreIcon.find(activeNavLinkClassName);

    it('has basic elements with active style', function() {
      expect(activeNavLink).toBeTruthy();
    });
  });
});

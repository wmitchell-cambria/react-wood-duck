import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import PreIcon from '../PreIcon';
import PostIcon from '../PostIcon';
import Link from '../Link';
import NavLink from '../NavLink';

describe('NavLink', () => {
  const navLinkHref = 'test.html';
  const navLinkText = 'Nav Link Test';
  const navLinkClass = 'navlink';
  const preIconProp = 'fa fa-user';
  const postIconProp = 'fa icon-warning-sign';
  const indentationLevel = 2;

  const activeNavLinkClass = 'active-navlink';
  const inactiveNavLinkClass = 'inactive-navlink';
  const indentationClassName = `indent-level${indentationLevel}`;
  const clickHandler = function() {};

  describe('basic', () => {
    const inactiveBasicNavLink = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        indentationLevel={indentationLevel}
        clickHandler={clickHandler}
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
        inactiveBasicNavLink.find('.' + inactiveNavLinkClass).exists()
      ).toBe(true);
    });

    it('has li element', () => {
      const liElement = inactiveBasicNavLink.find('li');
      expect(liElement.hasClass(navLinkClass)).toBe(true);
    });

    it('has Link component', () => {
      expect(
        inactiveBasicNavLink.containsMatchingElement(
          <Link
            text={navLinkText}
            href={navLinkHref}
            active={false}
            clickHandler={clickHandler}
          />
        )
      ).toBe(true);
    });

    it('has valid indentation style', () => {
      expect(
        inactiveBasicNavLink.find('.' + indentationClassName).exists()
      ).toBe(true);
    });

    it('has pre icon component', () => {
      expect(inactiveBasicNavLink.containsMatchingElement(<PreIcon />)).toBe(
        true
      );
    });

    it('has post icon component', () => {
      expect(inactiveBasicNavLink.containsMatchingElement(<PostIcon />)).toBe(
        true
      );
    });
  });

  describe('with PreIcon', () => {
    const navLinkWithPreIcon = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconProp}
        indentationLevel={indentationLevel}
        clickHandler={clickHandler}
      />
    );

    it('renders valid pre icon component', () => {
      expect(
        navLinkWithPreIcon.containsMatchingElement(
          <PreIcon icon={preIconProp} />
        )
      ).toBe(true);
    });
  });

  describe('with PostIcon', () => {
    const navLinkWithPostIcon = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        postIcon={postIconProp}
        indentationLevel={indentationLevel}
        clickHandler={clickHandler}
      />
    );

    it('renders valid post icon component', () => {
      expect(
        navLinkWithPostIcon.containsMatchingElement(
          <PostIcon icon={postIconProp} />
        )
      ).toBe(true);
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
      expect(liElement.find(Link).exists()).toBe(true);
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

    it('has active style', function() {
      expect(
        activeNavLinkWithPreIcon.find('.' + activeNavLinkClass).exists()
      ).toBe(true);
    });

    it('has Link component with active property', function() {
      expect(
        activeNavLinkWithPreIcon.containsMatchingElement(
          <Link text={navLinkText} href={navLinkHref} active={true} />
        )
      ).toBe(true);
    });
  });
});

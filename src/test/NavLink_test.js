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

    it('is an instance and not null', () => {
      expect(inactiveBasicNavLink).not.toBe(null);
      expect(inst).toEqual(jasmine.any(NavLink));
    });

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
      expect(inactiveBasicNavLink.filterWhere(n => n.hasClass(inactiveNavLinkClass))).toBeTruthy();
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
      <NavLink href={navLinkHref} text={navLinkText} preIcon={preIconClass} />
    );
    const inst = navLinkWithPreIcon.instance();
    const liElement = navLinkWithPreIcon.filterWhere(n => n.hasClass(preIconClass));

    it('is an instance and not null', () => {
      expect(navLinkWithPreIcon).not.toBe(null);
      expect(inst).toEqual(jasmine.any(NavLink));
    });

    it('has basic elements', () => {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has pre icon element', () => {
      expect(navLinkWithPreIcon.filterWhere(n => n.hasClass(preIconClass))).toBeTruthy();
    });
  });

  describe('with post icon property', () => {
    const navLinkWithPostIcon = shallow(
      <NavLink href={navLinkHref} text={navLinkText} postIcon={postIconClass} />
    );
    const inst = navLinkWithPostIcon.instance();
    const liElement = navLinkWithPostIcon.find('li');

    it('is an instance and not null', () => {
      expect(navLinkWithPostIcon).not.toBe(null);
      expect(inst).toEqual(jasmine.any(NavLink));
    });

    it('has basic elements', () => {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has post icon element', () => {
      expect(navLinkWithPostIcon.filterWhere(n => n.hasClass(postIconClass))).toBeTruthy();
    });
  });

  describe('with pre & post icon properties', () => {
    const navLinkWithPrePostIcons = shallow(
      <NavLink
        href={navLinkHref}
        text={navLinkText}
        preIcon={preIconClass}
        postIcon={postIconClass}
      />
    );
    const inst = navLinkWithPrePostIcons.instance();
    const liElement = navLinkWithPrePostIcons.find('li');

    it('is an instance and not null', () => {
      expect(inst).toEqual(jasmine.any(NavLink));
    });

    it('has basic elements', function() {
      expect(liElement).toBeTruthy();
      expect(liElement.find('a')).toBeTruthy();
    });

    it('has pre & post icons', function() {
       expect(navLinkWithPrePostIcons.filterWhere(n => n.hasClass(preIconClass))).toBeTruthy();
       expect(navLinkWithPrePostIcons.filterWhere(n => n.hasClass(postIconClass))).toBeTruthy();
    });
  });

  describe('with child components', function() {
    const navLinkWithChildren = shallow(
      <NavLink href={navLinkHref} text={navLinkText}>
        <div>Test Child</div>
      </NavLink>
    );
    const inst = navLinkWithChildren.instance();
    const liElement = navLinkWithChildren.find('li');

    it('is an instance and not null', () => {
      expect(inst).toEqual(jasmine.any(NavLink));
    });

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
        preIcon={preIconClass}
        active={true}
      />
    );
    const activeNavLink = activeNavLinkWithPreIcon.filterWhere(n => n.hasClass(activeNavLinkClass));

    it('has active style', function() {
      expect(activeNavLink).toBeTruthy();
    });
  });

  describe('with handleClick callback', function() {
     let foo;
     let navLinkWithClickHandler;
     beforeEach(function() {
       foo = {handleClick : function() {}};
       spyOn(foo, 'handleClick');
       navLinkWithClickHandler= shallow( 
         <NavLink
           href={navLinkHref}
           href={navLinkText}
           handleClick={foo.handleClick}
         />
       );
     });
     it('invokes callback on click', function() {
        navLinkWithClickHandler.find('a').simulate('click');
        expect(foo.handleClick).toHaveBeenCalled();
     });
  });
});

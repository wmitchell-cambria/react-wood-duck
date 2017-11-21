import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';
import NavLink from '../NavLink';
import NavLinks from '../NavLinks';
import SideBar from '../SideBar';

describe('Side Bar', function() {
  const navLinks = (
    <NavLinks>
      <NavLink text="Screener Summary" href="#screenerSummary" />
      <NavLink text="Allegations & Disposition" href="#allegations" />
      <NavLink text="History of Involvement" href="#history" />
    </NavLinks>
  );
  describe('given NavLinks as side bar content', () => {
    let sideBarWithNavigationLinksWrapper = null;
    beforeEach(() => {
      sideBarWithNavigationLinksWrapper = shallow(
        <SideBar>{navLinks}</SideBar>
      );
    });

    it('renders side bar', () => {
      expect(sideBarWithNavigationLinksWrapper.find('.side-bar').length).toBe(
        1
      );
    });

    it('renders side bar with valid accessibility attributes', () => {
      expect(
        sideBarWithNavigationLinksWrapper.find({ 'aria-label': 'Side Bar' })
          .length
      ).toBe(1);
    });

    it('renders side bar with NavLinks component', () => {
      expect(sideBarWithNavigationLinksWrapper.find(NavLinks).length).toBe(1);
    });

    it('renders side bar with default column width when columnWidth is not provided', () => {
      expect(sideBarWithNavigationLinksWrapper.find('.col-md-3').length).toBe(
        1
      );
    });
  });

  it('renders side bar with specified column width', () => {
    const sideBarCustomColumnWidth = shallow(
      <SideBar columnWidth={4}>{navLinks}</SideBar>
    );
    expect(sideBarCustomColumnWidth.find('.col-md-4').exists()).toBeTruthy();
  });
});

import React from 'react';
import GlobalHeader from '../GlobalHeader.js';
import { shallow, mount } from 'enzyme';
import './EnzymeSetup';

describe('Global Header', () => {
  var input = {
    logo: 'testlogo',
    profileName: 'testProfileName',
    profileAvatar: 'testProfileAvatar',
  };

  const globalHeader = shallow(<GlobalHeader />);
  const headerswithProps = shallow(<GlobalHeader {...input} />);
  const globalHeaderlogout = mount(<GlobalHeader />);

  it('renders the tag', () => {
    expect(globalHeader.type()).toBe('header');
  });

  it('verify the className', () => {
    expect(globalHeader.props().className).toBe('container-fluid');
  });

  it('find element with tag', () => {
    expect(globalHeader.find('div').length).toEqual(5);
    expect(globalHeader.find('ul').length).toEqual(1);
    expect(globalHeader.find('li').length).toEqual(5);
  });

  it('find element with class and default props', () => {
    const defaultSearchIcon = <i className="fa fa-search" />;
    const defaultAddIcon = <i className="fa fa-plus" />;
    const defaultBellIcon = <i className="fa fa-bell" />;

    expect(globalHeader.find('.row').length).toEqual(1);
    expect(globalHeader.find('.logo').props().className).toEqual('logo');
    expect(globalHeader.find('.logo').text()).toEqual('CWDS');
    expect(globalHeader.find('ul').hasClass('header-actions')).toBe(true);
    expect(globalHeader.find('.profile').props().className).toEqual('profile');
    expect(globalHeader.find('.profile').text()).toEqual(' Profile Name');
    expect(globalHeader.find('.profile-avatar').props().className).toEqual(
      'profile-avatar'
    );
    expect(globalHeader.find('.profile-avatar').text()).toEqual('PN');
    expect(globalHeader.containsMatchingElement(defaultSearchIcon)).toBe(true);
    expect(globalHeader.containsMatchingElement(defaultAddIcon)).toBe(true);
    expect(globalHeader.containsMatchingElement(defaultBellIcon)).toBe(true);
  });

  it('find element with class and object passed as props', () => {
    expect(headerswithProps.find('.logo').text()).toEqual('testlogo');
    expect(headerswithProps.find('.profile').text()).toEqual(
      ' testProfileName'
    );
    expect(headerswithProps.find('.profile-avatar').text()).toEqual(
      'testProfileAvatar'
    );
  });

  describe('#logout', () => {
    it('allows a logout when clicking profile', () => {
      const logoutUrl = '#/';
      const profileAvatar = globalHeaderlogout
        .find('.profile-avatar')
        .find('a');

      globalHeaderlogout.setProps({ logoutUrl });

      profileAvatar.simulate('click');

      const dropdown = globalHeaderlogout.find('.c_dropdown');

      expect(dropdown.length).toBe(1);
      expect(dropdown.props().className).toEqual('c_dropdown');
      expect(dropdown.find('a').props().href).toEqual(logoutUrl);
    });

    it('hides a logout dropdown when clicking on profile avatar', () => {
      const profileAvatar = globalHeaderlogout.find('.profile-avatar');

      profileAvatar.simulate('blur');

      expect(profileAvatar.length).toBe(1);
    });
  });
});

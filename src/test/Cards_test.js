import React from 'react';
import Cards from '../Cards.js';
import { mount, shallow } from 'enzyme';
import './EnzymeSetup';

describe('Cards', () => {
  const wrapper = shallow(<Cards />);
  const card = {
    cardHeaderText: 'some-text',
    children: 'primary',
  };
  const component = mount(<Cards />);
  component.setProps(card);

  it('verifying the className', () => {
    expect(wrapper.hasClass('bg-lightest-grey container')).toBe(true);
  });

  it('has props', () => {
    expect(wrapper.children.length).toEqual(1);
    expect(
      component
        .find('div')
        .at(1)
        .props().className
    ).toEqual('card edit double-gap-top');
    expect(
      component
        .find('div')
        .at(2)
        .props().className
    ).toEqual('card-header');
    expect(
      component
        .find('div')
        .at(3)
        .props().className
    ).toEqual('card-body');
    expect(
      component
        .find('div')
        .at(4)
        .props().className
    ).toEqual('clearfix');
    expect(
      component
        .find('span')
        .at(0)
        .props().children
    ).toEqual(card.cardHeaderText);
    expect(component.props().children).toEqual(card.children);
  });
});

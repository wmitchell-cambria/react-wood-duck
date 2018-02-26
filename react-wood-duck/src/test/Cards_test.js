import React from 'react';
import Cards from '../Cards.js';
import { mount, shallow } from 'enzyme';
import './EnzymeSetup';

describe('Cards', () => {
  const wrapper = shallow(<Cards />);

  const card = {
    editClass: '',
    cardHeaderText: 'some-text',
    children: 'primary',
  };
  const component = mount(<Cards />);
  component.setProps(card);

  it('has props', () => {
    expect(wrapper.children.length).toEqual(1);
    expect(component.prop('cardbgcolor')).toEqual('bg-light-grey');
    expect(component.prop('wrapContainer')).toEqual('container-fluid');
    expect(component.prop('columnXsmallWidth')).toEqual(12);
    expect(component.prop('columnMediumWidth')).toEqual(12);
    expect(component.prop('columnLargeWidth')).toEqual(12);
    expect(component.prop('offsetMediumValue')).toEqual(0);
    expect(
      component
        .find('div')
        .at(1)
        .props().className
    ).toEqual('card ' + card.editClass + ' double-gap-top');

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

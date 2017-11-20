import React from 'react';
import AddAdditionalItem from '../AddAdditionalItem.js';
import { mount, shallow } from 'enzyme';
import './EnzymeSetup';

describe('AddAdditionalItem', () => {
  const wrapper = shallow(<AddAdditionalItem />);

  it('verify the no of "div" tags ', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('has a className', () => {
    expect(wrapper.hasClass('list-item')).toBe(true);
  });

  it('has props passed as children', () => {
    const component = mount(<AddAdditionalItem />);
    const additionItem = {
      children: 'some class',
    };
    component.setProps(additionItem);
    expect(
      component
        .find('div')
        .at(0)
        .props().children
    ).toEqual(additionItem.children);
  });
});

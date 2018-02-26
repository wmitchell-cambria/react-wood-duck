import React from 'react';
import Button from '../Button.js';
import { mount } from 'enzyme';
import './EnzymeSetup';

describe('Button', () => {
  const btnclass = 'some class';
  const wrapper = mount(<Button btnClassName={btnclass} btnName={btnclass} />);

  it('verify the no of "div" tags ', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('has a className', () => {
    expect(wrapper.find('div').props().className).toEqual('row');
  });
  it('has a props', () => {
    const button = {
      btnClassName: 'specific class name',
      btnName: 'primary',
    };
    wrapper.setProps(button);
    expect(
      wrapper
        .find('button')
        .at(0)
        .props().className
    ).toEqual('btn btn-' + button.btnClassName);

    expect(
      wrapper
        .find('button')
        .at(0)
        .props().children
    ).toEqual(button.btnName);
  });
});

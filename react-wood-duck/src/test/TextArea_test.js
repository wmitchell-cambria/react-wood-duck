import React from 'react';
import TextArea from '../TextArea.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('TextArea', () => {
  const textarea = {
    name: 'some-name',
    label: 'some label name',
    gridClassName: 'class name',
    rows: 123,
    labelClassName: 'label with class name',
    fieldClassName: 'field class name',
    placeholder: 'should be string',
    value: 'some-text',
  };

  const wrapper = shallow(<TextArea {...textarea} />);

  it('verify the no of "div" tags ', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('has a className', () => {
    expect(wrapper.hasClass('form-group')).toBe(true);
  });
  it('has basic elements', () => {
    expect(wrapper.find('label').prop('className')).toEqual('form-label');
  });

  it('it has props', () => {
    expect(
      wrapper
        .find('div')
        .at(1)
        .props().className
    ).toEqual(textarea.gridClassName);
    expect(
      wrapper
        .find('label')
        .at(0)
        .props().htmlFor
    ).toEqual(textarea.name);
    expect(
      wrapper
        .find('textarea')
        .at(0)
        .props().className
    ).toEqual(textarea.labelClassName);
    expect(
      wrapper
        .find('textarea')
        .at(0)
        .props().value
    ).toEqual(textarea.value);
    expect(
      wrapper
        .find('textarea')
        .at(0)
        .props().placeholder
    ).toEqual(textarea.placeholder);
    expect(
      wrapper
        .find('textarea')
        .at(0)
        .props().rows
    ).toEqual(textarea.rows);
  });
});

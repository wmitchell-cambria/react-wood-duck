import React from 'react';
import DropDownField from '../DropDownField.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('DropDownField', function() {
  let onChangeSpy = jasmine.createSpy('onChange');
  let props = {
    name: 'Hi',
    options: [],
    id: '123ABCD',
    selectedOption: 'California',
    placeholder: 'Values',
    gridClassName: 'Grid class name',
    label: 'label name',
    selectClassName: 'classnames',
    onChange: onChangeSpy,
  };
  const wrapper = shallow(<DropDownField {...props} />);
  const instance = wrapper.instance();

  it('has basic elements ', () => {
    expect(wrapper.hasClass('form-group')).toEqual(true);
  });
  it('has props', () => {
    expect(instance.props.name).toEqual('Hi');
    expect(instance.props.options).toEqual([]);
    expect(instance.props.id).toEqual('123ABCD');
    expect(instance.props.selectedOption).toEqual('California');
    expect(instance.props.placeholder).toEqual('Values');
    expect(instance.props.gridClassName).toEqual('Grid class name');
    expect(instance.props.label).toEqual('label name');
    expect(instance.props.selectClassName).toEqual('classnames');
  });
});

import React from 'react';
import CheckboxRadioGroup from '../CheckboxRadioGroup.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

let props = {
  label: 'hi',
  type: 'radio',
  name: 'CheckboxRadioGroup',
  options: [],
  heading: 'CheckBox Test',
};

describe('CheckboxRadioGroup', () => {
  const renderedComponent = shallow(<CheckboxRadioGroup {...props} />);

  it('haa the tag', () => {
    expect(renderedComponent.type()).toBe('fieldset');
  });

  it('verify the className', () => {
    expect(renderedComponent.props().className).toBe('fieldset-inputs sans');
  });

  it('have passed props', () => {
    const instance = renderedComponent.instance();
    expect(instance.props.label).toBe('hi');
    expect(instance.props.type).toBe('radio');
    expect(instance.props.name).toBe('CheckboxRadioGroup');
    expect(instance.props.options.length).toEqual([].length);
    expect(instance.props.heading).toBe('CheckBox Test');
  });
});

import React from 'react';
import CheckboxRadioGroup from '../CheckboxRadioGroup.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

let props = {
  label: 'hi',
  type: 'radio',
  name: 'CheckboxRadioGroup',
  options: [],
  heading: 'CheckBox Test',
};

describe('CheckboxRadioGroup', function() {
  const renderedComponent = TestUtils.createRenderer();
  renderedComponent.render(<CheckboxRadioGroup {...props} />);
  const resultTag = renderedComponent.getRenderOutput();

  it('renders the tag', function() {
    expect(resultTag.type).toBe('fieldset');
  });

  it('verify the className', function() {
    expect(resultTag.props.className).toBe('fieldset-inputs sans');
  });
});

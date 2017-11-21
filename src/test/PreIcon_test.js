import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import PreIcon from '../PreIcon';

describe('PreIcon', () => {
  it('renders nothing when icon property is not provided', () => {
    expect(shallow(<PreIcon />).children().length).toBe(0);
  });

  it('renders pre icon when valid icon property is provided', () => {
    const icon = 'fa-user';
    const wrapper = shallow(<PreIcon icon={icon} />);
    expect(wrapper.filterWhere(n => n.hasClass(icon)).exists()).toBe(true);
  });
});

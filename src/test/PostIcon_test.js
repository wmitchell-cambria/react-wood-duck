import React from 'react';
import { shallow } from 'enzyme';
import './EnzymeSetup';

import PostIcon from '../PostIcon';

describe('PostIcon', () => {

  it('renders nothing when icon property is not provided', () => {
    expect(shallow(<PostIcon />).children().length).toBe(0);
  });

  it('renders post icon when valid icon property is provided', () => {
    const icon="fa-warning";
    const wrapper = shallow(<PostIcon icon={icon} />);
    expect(wrapper.filterWhere(n => n.hasClass(icon)).exists()).toBe(true);
  });
});

import React from 'react';
import Layout01 from '../Layout01.js';
import GlobalHeader from '../GlobalHeader.js';
import PageHeader from '../PageHeader.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('Layout01', () => {
  const wrapper = shallow(<Layout01 />);

  it('contains matching elements', () => {
    expect(wrapper.containsMatchingElement(<PageHeader />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<GlobalHeader />)).toEqual(true);
  });
});

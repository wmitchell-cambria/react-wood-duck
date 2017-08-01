import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Header from '../Header';

const wrapper = shallow(<Header/>);

describe('(Component) Header', () => {
  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1);
  });
});
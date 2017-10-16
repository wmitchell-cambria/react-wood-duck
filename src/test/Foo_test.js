import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Enzyme_setup from './Enzyme_setup';
import Foo from '../Foo.js';

describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).toBe(true);
  });

  it('contains spec with an expectation', function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('contains spec with an expectation', function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });
});

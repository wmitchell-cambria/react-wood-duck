import React from 'react';
import Table from '../Table.js';
import { shallow } from 'enzyme';
import './EnzymeSetup';

describe('TextArea', () => {
  const wrapper = shallow(<Table />);

  it('has a className', () => {
    expect(wrapper.hasClass('table table-hover table-striped')).toBe(true);
  });

  it('verify the no of table rows ', () => {
    expect(wrapper.find('tr').length).toEqual(4);
  });

  it('verify the no of table header', () => {
    expect(wrapper.find('th').length).toEqual(7);
  });

  it('verify the no of table data', () => {
    expect(wrapper.find('td').length).toEqual(9);
  });
});

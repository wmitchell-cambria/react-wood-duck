import React from 'react';
import Alert from '../Alert.js';
import { mount, shallow } from 'enzyme';
import './EnzymeSetup';

describe('Alert', () => {
  const alertclass = 'Testing';
  const wrapper = shallow(
    <Alert alertClassName={alertclass} faIcon={alertclass} />
  );
  const alert = {
    alertClassName: 'Success!',
    faIcon: 'fa-info-circle icon',
    alertMessage: 'Error! you have to check back again!',
    alertCross: true,
  };
  const comp = mount(<Alert />);
  comp.setProps(alert);

  it('has a className', () => {
    expect(wrapper.hasClass('row')).toBe(true);
  });
  it('has a props', () => {
    expect(
      comp
        .find('div')
        .at(1)
        .props().className
    ).toEqual('col-xs-12');

    expect(
      comp
        .find('div')
        .at(2)
        .props().className
    ).toEqual('alert-message ' + alert.alertClassName + '-message');

    expect(
      comp
        .find('div')
        .at(3)
        .props().className
    ).toEqual('alert-icon');

    expect(
      comp
        .find('div')
        .at(4)
        .props().className
    ).toEqual('alert-text');

    expect(
      comp
        .find('div')
        .at(4)
        .props().children
    ).toEqual(alert.alertMessage);

    expect(
      comp
        .find('i')
        .at(0)
        .props().className
    ).toEqual('fa ' + alert.faIcon);

    expect(
      comp
        .find('div')
        .at(5)
        .props().className
    ).toEqual('alert-cross');
    expect(
      comp
        .find('i')
        .at(1)
        .props().className
    ).toEqual('fa fa-times');
    const instance = wrapper.instance();
    expect(instance.props.faIcon).toEqual(alertclass);
    expect(instance.props.alertClassName).toEqual(alertclass);
    expect(instance.props.alertCross).toEqual(true);
  });
});

import CommonAddressComponent from '../CommonAddressComponent.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';

import React from 'react';
import { shallow } from 'enzyme';
require('./Enzyme_setup');

const stateTypes = {
  items: [
    {
      id: 1,
      value: 'Alabama',
    },
    {
      id: 2,
      value: 'Alaska',
    },
    {
      id: 3,
      value: 'American Samoa',
    },
    {
      id: 4,
      value: 'Arizona',
    },
    {
      id: 5,
      value: 'Arkansas',
    },
    {
      id: 6,
      value: 'California',
    },
  ],
};
describe('Verify Common Address Fields Component', () => {
  let commonAddressComponent, onChangeSpy;
  onChangeSpy = jasmine.createSpy('onChange');
  const addressFields = {
    street_address: '',
    zip: '',
    city: '',
    state: null,
  };
  const props = {
    addressTitle: 'Physical Address',
    addressType: 'Residential',
    id: 'street_address',
    suggestions: [],
    stateTypes: stateTypes.items,
    addressFields: addressFields,
    onChange: onChangeSpy,
  };
  beforeEach(() => {
    commonAddressComponent = shallow(
      <CommonAddressComponent
        addressTitle="Physical Address"
        addressType="Residential"
        id="street_address"
        suggestions={[]}
        stateTypes={stateTypes.items}
        addressFields={addressFields}
        onChange={onChangeSpy}
        renderSuggestion={onChangeSpy}
        onSuggestionsFetchRequested={onChangeSpy}
      />
    );
  });
  it('Load Address Fields', () => {
    expect(commonAddressComponent.length).toEqual(1);
  });
  it('verify Residential street address', () => {
    let streetAddress = commonAddressComponent
      .find('#Residentialstreet_address')
      .at(0);
    expect(streetAddress.length).toBe(1);
  });
  it('verify mailing address zip change', () => {
    let zipCodeField = commonAddressComponent.find('#Residentialzip').at(0);
    zipCodeField.simulate('change', { target: { value: '95833' } });
    expect(onChangeSpy).toHaveBeenCalledWith('zip', '95833');
  });
  it('verify mailing Address city change', () => {
    let cityField = commonAddressComponent.find('#Residentialcity').at(0);
    cityField.simulate('change', { target: { value: 'Sacramento' } });
    expect(onChangeSpy).toHaveBeenCalledWith('city', 'Sacramento');
  });
  it('verify mailing Address State change', () => {
    let stateDropDownField = commonAddressComponent
      .find('#Residentialstate_type')
      .at(0);
    stateDropDownField.simulate('change', {
      target: { selectedOptions: [{ value: 1, text: 'Alabama' }] },
    });
    expect(onChangeSpy).toHaveBeenCalledWith('state', {
      id: 1,
      value: 'Alabama',
    });
  });
  describe('AutoSuggest Render', () => {
    let renderedComponent, resultTag;
    beforeEach(() => {
      renderedComponent = TestUtils.createRenderer();
      renderedComponent.render(<CommonAddressComponent {...props} />);
      resultTag = renderedComponent.getRenderOutput();
    });
    it('AutoSuggest label', () => {
      let autoSuggestField =
        resultTag.props.children[0].props.children[0].props;
      expect(autoSuggestField.children).toBe('Physical Address');
    });
    it('for AutoSuggest Component load', () => {
      let streesAddressAutoFill =
        resultTag.props.children[0].props.children[1].type.name;
      expect(streesAddressAutoFill).toBe('Autosuggest');
    });
  });
});

import React from 'react';

import { storiesOf } from '@storybook/react';

import CommonAddressComponent from '../../src/CommonAddressComponent';

const styles = { paddingTop: '20px' };
const addressFields = {
  street_address: '',
  zip: '',
  city: '',
  state: null,
};
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

const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);

class CommonAddressComponentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addressFields };
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(key, value) {
    const newAddressFields = this.state.addressFields;
    newAddressFields[key] = value;
    this.setState({ addressFields: newAddressFields });
  }

  render() {
    return (
      <CommonAddressComponent
        addressTitle="Physical Address"
        addressType="Residential"
        id="street_address"
        suggestions={[]}
        stateTypes={stateTypes.items}
        addressFields={addressFields}
        onChange={this.handleOnChange}
        onSuggestionsFetchRequested={event => {}}
        onSuggestionSelected={() => {}}
      />
    );
  }
}

const CommonAddressComponentStory = () => <CommonAddressComponentWrapper />;

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('CommonAddressComponent', CommonAddressComponentStory);

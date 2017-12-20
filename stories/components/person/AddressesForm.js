import React from 'react'

import { storiesOf } from '@storybook/react'

import AddressesForm from '../../../src/person/AddressesForm'

const styles = { paddingTop: '20px' }
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
)

const AddressesFormStory = () => (
  <AddressesForm
    addresses={[
      {
        city: 'Sometown',
        state: 'ca',
        street: '1234 Nowhere Lane',
        type: 'home',
        zip: '90210',
      },
    ]}
    addressTypeOptions={[
      { label: 'Home', value: 'home' },
      { label: 'Work', value: 'work' },
      { label: 'Hospital', value: 'hospital' },
    ]}
    stateOptions={[
      { label: 'Alaska', value: 'ak' },
      { label: 'California', value: 'ca' },
      { label: 'New York', value: 'ny' },
    ]}
  />
)

storiesOf('Person Components', module)
  .addDecorator(CenterDecorator)
  .add('AddressesForm', AddressesFormStory)

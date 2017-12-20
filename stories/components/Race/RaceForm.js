import React from 'react'
import { storiesOf } from '@storybook/react'
import RaceFormContainer from '../../../src/Race/RaceFormContainer'

const styles = { paddingTop: '20px' }
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
)

const RaceFormStory = () => (
  <div>
    <RaceFormContainer />
  </div>
)

storiesOf('Race Card', module)
  .addDecorator(CenterDecorator)
  .add('RaceForm', RaceFormStory)

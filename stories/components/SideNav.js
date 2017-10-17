import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideNav from '../../src/SideNav';

const CenterDecorator = story => <div>{story()}</div>;
const SideNavStory = () => (
  <div>
    <div className="row">
      <SideNav content="{'type':'menu', 'text': 'Test'}" columnWidth={3} />
    </div>
  </div>
);

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('SideNav', SideNavStory);

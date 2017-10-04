import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SideNav from '../src/SideNav';

storiesOf('SideNav', module)
   .addDecorator(story => (
        <div>
		{story()}
	</div>
   ))
   .add('Default', () => (
       <div>
		<div className="row">
       			<SideNav content="{'type':'menu', 'text': 'Test'}" columnWidth={3} />
		</div>
       </div>
   ))
;

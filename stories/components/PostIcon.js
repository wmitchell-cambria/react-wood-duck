import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import PostIcon from '../../src/PostIcon';

const basicUsage = `
    ####  Usage
      - Use when there is an icon to be displayed after main element.

      - Wrapped in *NavLink* component.

       `;

storiesOf('Components', module)
  .add(
    'Post Icon',
    withInfo(`${basicUsage}`)(() => (
      <div className="col-md-1">
          <span style={{visibility:'hidden'}}>kjh</span>
        <PostIcon icon="fa fa-exclamation-triangle c-red" />
      </div>
    ))
  )
;

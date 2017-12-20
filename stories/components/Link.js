import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Link from '../../src/Link'

const basicLinkUsage = `
    #### Basic Link Usage
      - Use when there is an anchor link.

      - Provides 'clickHandler' property to pass an onClick callback.

      - To highlight a currently selected link, Provide *active* property with true value.

      - Wrapped in *NavLink* component.

       `

storiesOf('Components', module).add(
  'Link',
  withInfo(`${basicLinkUsage}`)(() => (
    <div className="container">
      <div style={{ display: 'block' }}>
        <Link href="test.html" text="Basic Link" />
      </div>
      <br />
      <div style={{ display: 'block' }}>
        <Link href="test.html" text="Active Link" active={true} />
      </div>
    </div>
  ))
)

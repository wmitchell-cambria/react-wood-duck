import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import PreIcon from '../../src/PreIcon'

const basicUsage = `
    ####  Usage
      - Use when there is an icon to be displayed before main element.

      - Wrapped in *NavLink* component.

       `

storiesOf('Components', module).add(
  'Pre Icon',
  withInfo(`${basicUsage}`)(() => <PreIcon icon="fa fa-user" />)
)

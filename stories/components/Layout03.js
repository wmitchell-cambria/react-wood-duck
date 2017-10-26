import React from 'react';
import { storiesOf } from '@storybook/react';
import Layout03 from '../../src/Layout03';

const sideNavContent = [
      {
        type: 'navLinks',
        navItems: [
          {
            type: 'navLink',
            text: 'Tommy Cambell',
            href: '#tom',
            preIcon: 'fa fa-user',
          },
          {
            type: 'navLink',
            text: 'Aubrey Cambell',
            href: '#aub',
            preIcon: 'fa fa-user',
          },
          {
            type: 'navLink',
            text: 'Chris Cambell',
            href: '#chris',
            preIcon: 'fa fa-user',
          },
        ],
      },
    ];
const Layout03Story = () => <Layout03 sideNavContent={sideNavContent}/>;

storiesOf('Components', module).add('Layout03', Layout03Story);

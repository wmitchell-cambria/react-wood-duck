import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PageHeader from '../../src/PageHeader';

const PageHeaderStory = () => <PageHeader />;

storiesOf('Components', module).add('PageHeader', PageHeaderStory);
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import GlobalHeader from '../../src/GlobalHeader';

const GlobalHeaderStory = () => <GlobalHeader />;

storiesOf('Components', module).add('GlobalHeader', GlobalHeaderStory);
import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import PageHeader from '../../src/PageHeader';

const info = `
    #### Usage
    - PageHeader component consists of
      * Optional Page title
      * Optional button
      * Optional children to be rendered undereath the component
  `;
const PageHeaderStory = () => <PageHeader />;
const PageHeaderStoryHidden = () => <PageHeader button={null} />;
const PageHeaderStoryChildren = () => (
  <PageHeader pageTitle="This page has a child">
    <div className="row bg-maple c-ray text-center">
      <p>This is a child component</p>
    </div>
  </PageHeader>
);

storiesOf('Components', module)
  .add('PageHeader - Default', withInfo(info)(PageHeaderStory))
  .add('PageHeader - Hidden Button', withInfo(info)(PageHeaderStoryHidden))
  .add('PageHeader - With Children', withInfo(info)(PageHeaderStoryChildren));

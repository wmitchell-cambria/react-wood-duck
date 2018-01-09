import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Cards from '../../src/Cards';
import InputComponent from '../../src/InputComponent';

const CenterDecorator = storyFn => <div className="container">{storyFn()}</div>;
const cardBody = (
  <div>
    <div className="row">
      <div className="col-md-4">
        <label htmlFor="firstName">First name</label>
        <div className="c-gray">John</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="middleName">Middle name</label>
        <div className="c-gray">James</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="lastName">Last name</label>
        <div className="c-gray">Smith</div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <label htmlFor="gender">Gender</label>
        <div className="c-gray">Male</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="dateOfBirth">Date of birth</label>
        <div className="c-gray">02/25/1986</div>
      </div>
      <div className="col-md-4">
        <label htmlFor="sss">Social security number</label>
        <div className="c-gray">158-698-5874</div>
      </div>
    </div>
  </div>
);

const cardBody2 = (
  <div className="row">
    <div className="col-md-4">
      <InputComponent label="First Name" />
    </div>
    <div className="col-md-4">
      <InputComponent label="Middle Name" />
    </div>
    <div className="col-md-4">
      <InputComponent label="Last Name" />
    </div>
  </div>
);

const CardsStory = withInfo(
  `
    #### Cards Variations
      - View mode ( EDIT button on right corner of the card-header )
      cardHeaderButton={true}
      cardActionButtons={false}

      - Edit mode ( SAVE and CANCEL buttons on right corner of the card-body)
      cardHeaderButton={false}
      cardActionButtons={true}

    #### Usage
      - Use to group (or chunk) related content.
    
      - Use in longer forms when saving content as 
      you go is important.

      - Use in dashboards to organize content or 
      support customization.

      - Cards with Edit functionality should use an 
      "Edit" button in the top right corner and "save" and "Cancel" buttons 
      in card-body by passing "editable = {true}"

      - Cards with Edit functionality should also 
      have Save functionality. These two functions 
      are what make up Edit and View Mode.

      - Cards with errors can be saved to support 
      task-switching of our users.

    #### Accessibility
      - Make sure that the buttons on the card are 
      accessible (See buttons section)
    
      - Saving the card should keep 
  `
)(() => (
  <div>
    <Cards
      cardHeaderText="Profile Information"
      cardbgcolor="transparent"
      cardHeaderButton={true}
      cardActionButtons={false}
    >
      {cardBody}
    </Cards>

    <Cards
      cardHeaderText="Profile Information"
      cardbgcolor="transparent"
      cardHeaderButton={false}
      cardActionButtons={true}
    >
      {cardBody2}
    </Cards>
  </div>
));

storiesOf('Components', module)
  .addDecorator(CenterDecorator)
  .add('Cards', CardsStory);

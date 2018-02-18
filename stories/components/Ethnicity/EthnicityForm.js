import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import EthnicityForm from '../../../src/EthnicityForm';
import { ETHNICITY_DETAILS } from './EthnicityDetails';

const styles = { paddingTop: '20px' };
const CenterDecorator = storyFn => (
  <div className="container" style={styles}>
    {storyFn()}
  </div>
);

const personId = '1';

export default class EthnicityFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personId: personId,
      latinoOrigin: '',
      ethnicityDetailOptions: ETHNICITY_DETAILS,
      disableFields: false,
      ethnicityDetail: '',
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(field, value) {
    field !== 'ethnicity_detail'
      ? value === 'Yes' || !value
        ? this.setState({ latinoOrigin: value, disableFields: value === 'Yes' })
        : this.setState({
            latinoOrigin: value,
            disableFields: true,
            ethnicityDetail: '',
          })
      : this.setState({ ethnicityDetail: value.toString() });
  }
  render() {
    return (
      <div>
        <EthnicityForm
          onChange={this.onChange}
          ethnicityDetailOptions={this.state.ethnicityDetailOptions}
          {...this.state}
        />
      </div>
    );
  }
}
const EthnicityFormStory = withInfo(
  `
    #### Usage
     Use EthnicityForm from src/EthnicityForm.js to display the view of Ethnicity Fields, the functionality 
     can be passed through props as shown in storybook.
    
     #### Accessibility
     Make sure the functionality of ethnicity is working as same as storybook. (Click Functions)
     When Clicked, other options should disable.
  `
)(() => <EthnicityFormContainer />);

storiesOf('Ethnicity Card', module)
  .addDecorator(CenterDecorator)
  .add('EthnicityFormContainer', EthnicityFormStory);

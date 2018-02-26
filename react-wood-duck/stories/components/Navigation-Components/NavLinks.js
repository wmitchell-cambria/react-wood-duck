import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLinks from '../../../src/NavLinks';
import NavLink from '../../../src/NavLink';

const codeStyle = 'color:powderblue';
const basicNavLinksUsage = `
    ###### Basic NavLinks Usage
        - Use *NavLinks* component to render a group of navigation links.

        - *NavLink* components are passed to *NavLinks* component as children.

        - *NavLinks* component can render nested navigation links. An example of this is shown under the NavLinks menu.

        - Please refer to NavLink menu to learn more about *NavLink* component.

    ###### Accessibility
        - *NavLinks* component wraps contents in <div role="navigation"> if it is not nested.

 `;

const handleClick = function() {
  return false;
};
const simpleNavLinks = [
  <NavLink
    key={1}
    text="Tommy Cambell"
    href="#tom"
    preIcon="fa fa-user"
    handleClick={handleClick}
  />,
  <NavLink
    key={2}
    text="Aubrey Cambell"
    href="#aub"
    preIcon="fa fa-user"
    handleClick={handleClick}
  />,
  <NavLink
    key={3}
    text="Chris Cambell"
    href="#chr"
    preIcon="fa fa-user"
    handleClick={handleClick}
  />,
];

const navLinksWithInnerNav = [
  <NavLink
    key={1}
    text="Screener Summary"
    href="#screenerSummary"
    handleClick={handleClick}
  />,
  <NavLink
    key={2}
    text="Allegations & Disposition"
    href="#allegations"
    handleClick={handleClick}
  />,
  <NavLink
    key={3}
    text="People & Roles"
    href="#pplroles"
    handleClick={handleClick}
  >
    <NavLinks>
      <NavLink
        key={1}
        text="Tommy Cambell"
        href="#tommy"
        preIcon="fa fa-user"
        postIcon="fa fa-exclamation-triangle c-red"
        handleClick={handleClick}
        indentationLevel={1}
      />
      <NavLink
        key={2}
        text="Aubrey Cambell"
        href="#aubrey"
        preIcon="fa fa-user"
        handleClick={handleClick}
        indentationLevel={1}
      />
      <NavLink
        key={3}
        text="Chris Cambell"
        href="#chris"
        preIcon="fa fa-user"
        handleClick={handleClick}
        indentationLevel={1}
      />
    </NavLinks>
  </NavLink>,
  <NavLink key={4} text="History of Involvement" href="#history" />,
];

storiesOf('Navigation Components/NavLinks', module)
  .add(
    'Simple Navigation links',
    withInfo(`
        #### Usage
        - Used to render a group of navigation links

        - *NavLinks* component could look like below to render a group of navigation links.
                <code style=${codeStyle}>
                    &lt;NavLinks&gt;
                        &lt;NavLink key={1} text="Tommy Cambell" href="#tom" preIcon="fa fa-user" /&gt;
                        &lt;NavLink key={2} text="Aubrey Cambell" href="#aub" preIcon="fa fa-user" /&gt;
                        &lt;NavLink key={3} text="Chris Cambell" href="#chr" preIcon="fa fa-user" /&gt;
                    &lt;/NavLinks&gt;
                </code>
        * * *
        ${basicNavLinksUsage}
     `)(() => (
      <div className="container col-md-3" role="navigation">
        <NavLinks>{simpleNavLinks}</NavLinks>
      </div>
    ))
  )
  .add(
    'Nested navigation links ',
    withInfo(`
       #### Usage
         - Used to render nested navigation links.

         - Nested Navigation links are constructed by wrapping *NavLinks* component inside *NavLink* component as shown below. Please pass property *nested* with value 'true' on nested *NavLinks* component.
                  <code style=${codeStyle}>   
                      &lt;NavLinks&gt;
                          &lt;NavLink key={1} text="People & Roles" href="#pplroles" &gt;
                             &lt;NavLinks nested={true} &gt;
                                &lt;NavLink key={1} text="Tommy Cambell" href="#tom" preIcon="fa fa-user" /&gt;
                                &lt;NavLink key={2} text="Aubrey Cambell" href="#au" preIcon="fa fa-user" /&gt;
                             &lt;/NavLinks&gt;
                          &lt;/NavLink&gt;
                      &lt;/NavLinks&gt;
                  </code>

         - Another example of nested navigation links is shown below. In the below example, nested navigation links are under 2nd NavLink.
                  <code style=${codeStyle}>    
                      &lt;NavLinks&gt;
                          &lt;NavLink key={1} text="Screener Summary" href="#screenerSummary" /&gt;
                          &lt;NavLink key={2} text="People & Roles" href="#pplroles" &gt;
                             &lt;NavLinks nested={true} &gt;
                                &lt;NavLink key={1} text="Tommy Cambell" href="#tom" preIcon="fa fa-user" /&gt;
                                &lt;NavLink key={2} text="Aubrey Cambell" href="#au" preIcon="fa fa-user" /&gt;
                                &lt;NavLink key={3} text="Chris Cambell" href="#chr" preIcon="fa fa-user" /&gt;
                             &lt;/NavLinks&gt;
                          &lt;/NavLink&gt;
                          &lt;NavLink key={4} text="History of Involvement" href="#history" /&gt;
                      &lt;/NavLinks&gt;
                  </code>

       * * *
       ${basicNavLinksUsage}
       `)(() => (
      <div className="container col-md-3" role="navigation">
        <NavLinks>{navLinksWithInnerNav}</NavLinks>
      </div>
    ))
  );

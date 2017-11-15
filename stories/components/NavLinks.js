import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLinks from '../../src/NavLinks';
import NavLink from '../../src/NavLink';

const codeStyle = 'color:powderblue';
const basicNavLinksUsage = `
    ###### Basic NavLinks Usage
        - Use *NavLinks* component to render a group of navigation links.

        - *NavLink* components are passed to NavLinks component as children.

        - *NavLinks* component can render nested navlinks. Please pass property *nested* to indicate nested NavLinks components. An example of this is shown under the NavLinks menu.

        - Please refer to NavLink menu to learn more about NavLink components.

    ###### Accessibility
        - NavLinks component renders <div role="navigation"> if it is not nested.

 `;

const handleClick=function() {
            return false;
          };
const simpleNavLinks = [
  <NavLink
    text='Tommy Cambell'
    href='#tom'
    preIcon='fa fa-user'
    handleClick={handleClick}
  />,
  <NavLink
    text='Aubrey Cambell'
    href='#aub'
    preIcon='fa fa-user'
    handleClick={handleClick}
  />,
  <NavLink
    text='Chris Cambell'
    href='#chr'
    preIcon='fa fa-user'
    handleClick={handleClick}
  />,
];

const navLinksWithInnerNav = [
  <NavLink text='Screener Summary' href='#screenerSummary' handleClick={handleClick}/>,
  <NavLink text='Allegations & Disposition' href='#allegations' handleClick={handleClick}/>,
  <NavLink
    text='People & Roles'
    href='#pplroles'
    handleClick={handleClick}
  >
     <NavLinks>
     <NavLink
        text='Tommy Cambell'
        href='#tommy'
        preIcon='fa fa-user'
        postIcon='fa fa-exclamation-triangle c-red'
        handleClick={handleClick}
        indentationLevel={1}
      />
      <NavLink
        text='Aubrey Cambell'
        href='#aubrey'
        preIcon='fa fa-user'
        handleClick={handleClick}
        indentationLevel={1}
      />
      <NavLink
        text='Chris Cambell'
        href='#chris'
        preIcon='fa fa-user'
        handleClick={handleClick}
        indentationLevel={1}
      />
      </NavLinks>
  </NavLink>,
  <NavLink text='History of Involvement' href='#history' />
];

storiesOf('Sub Components-beta/NavLinks', module)
  .add(
    'Simple Navigation links',
    withInfo(`
        #### Usage
        - Used to render a group of navigation links

        - *NavLinks* component could look like below to render a group of navigation links.
                <pre><code style=${codeStyle}>
                    &lt;NavLinks&gt;
                        &lt;NavLink text="Tommy Cambell" href="#tom" preIcon="fa fa-user" /&gt;
                        &lt;NavLink text="Aubrey Cambell" href="#aub" preIcon="fa fa-user" /&gt;
                        &lt;NavLink text="Chris Cambell" href="#chr" preIcon="fa fa-user" /&gt;
                    &lt;/NavLinks&gt;
                </code></pre>
        * * *
        ${basicNavLinksUsage}
     `)(() => (
      <div className="container col-md-3" role="navigation">
        <NavLinks>
          {simpleNavLinks}
        </NavLinks>
      </div>
    ))
  )
  .add(
    'Nested navigation links ',
    withInfo(`
       #### Usage
         - Provide *NavLink* components as children to render

         - *NavLinks* component could look like below for nested navigation links:
                  <pre><code style=${codeStyle}>    
                      &lt;NavLinks&gt;
                          &lt;NavLink text="Screener Summary" href="#screenerSummary" /&gt;
                          &lt;NavLink text="Allegations & Disposition" href="#allegations" /&gt;
                          &lt;NavLink text="People & Roles", href:"#pplroles" &gt;
                             &lt;NavLinks nested={true} &gt;
                                &lt;NavLink text="Tommy Cambell" href="#tom" preIcon="fa fa-user" /&gt;
                                &lt;NavLink text="Aubrey Cambell" href="#aub" preIcon="fa fa-user" /&gt;
                                &lt;NavLink text="Chris Cambell" href="#chr" preIcon="fa fa-user" /&gt;
                             &lt;/NavLinks &gt;
                          &lt;/NavLink &gt;,
                          &lt;NavLink text="History of Involvement" href="#history" /&gt;,
                      &lt;/NavLinks&gt;
                  </code></pre>

       * * *
       ${basicNavLinksUsage}
       `)(() => (
      <div className="container col-md-3" role="navigation">
        <NavLinks>
          {navLinksWithInnerNav}
        </NavLinks>
      </div>
    ))
  );

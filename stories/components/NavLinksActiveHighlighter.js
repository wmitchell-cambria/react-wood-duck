import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLink from '../../src/NavLink';
import NavLinks from '../../src/NavLinks';
import NavLinksContainer from '../../src/NavLinksContainer';

class NavLinksActiveHighLighter extends React.Component {

    constructor(props) {
    super(props);
    this.state = { activeNavLinkHref: this.getDefaultActiveNavLinkHref() };
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  getDefaultActiveNavLinkHref() {
    return "#h1.html";
  }

  handleNavLinkClick(href, e) {
    this.setState({ activeNavLinkHref: href });
  }

  isActive(href) {
    return this.state.activeNavLinkHref == href;
  }

  render() {
    const navLinks = [<NavLink text="h1" href="#h1.html" active={this.isActive("#h1.html")} handleClick={this.handleNavLinkClick} />,
                      <NavLink text="h2" href="#h2.html" active={this.isActive("#h2.html")} handleClick={this.handleNavLinkClick} />,
                      <NavLink text="h3" href="#h3.html" active={this.isActive("#h3.html")} handleClick={this.handleNavLinkClick} />
                ];
    return (
      <NavLinks>
        {navLinks}
      </NavLinks>
    );
  }
}

const codeStyle = 'color:powderblue';

storiesOf('Sub Components/NavLinksActiveHighlighter Sample', module).add(
  'NavigationLinksActiveHighlighter',
  withInfo(
    `
    #### Usage
    - Sample code to show how to get NavLinks Active Highlighter working.
        <code style=${codeStyle}>
            class NavLinksActiveHighLighter extends React.Component {

                constructor(props) {
                    super(props);
                    this.state = { activeNavLinkHref: this.getDefaultActiveNavLinkHref() };
                    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
                    this.isActive = this.isActive.bind(this);
                }

                getDefaultActiveNavLinkHref() {
                    return "#h1.html";
                }

                handleNavLinkClick(href, e) {
                    this.setState({ activeNavLinkHref: href });
                }

                isActive(href) {
                    return this.state.activeNavLinkHref == href;
                }

                render() {
                    const navLinks = [&lt;NavLink text="h1" href="#h1.html" active={this.isActive("#h1.html")} handleClick={this.handleNavLinkClick} /&gt;,
                            &lt;NavLink text="h2" href="#h2.html" active={this.isActive("#h2.html")} handleClick={this.handleNavLinkClick} /&gt;,
                            &lt;NavLink text="h3" href="#h3.html" active={this.isActive("#h3.html")} handleClick={this.handleNavLinkClick} /&gt;
                    ];
                    return (
                        <NavLinks>
                            {navLinks}
                        </NavLinks>
                    );
                }
            }
        </code>
 
`
  )(() => (
    <div className="container col-md-3">
       <NavLinksActiveHighLighter />
    </div>
  ))
);

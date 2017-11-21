import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavLink from '../../../src/NavLink';
import NavLinks from '../../../src/NavLinks';

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
    const navLinks = [<NavLink text="History of Involvement" href="#h1.html" active={this.isActive("#h1.html")} clickHandler={this.handleNavLinkClick} />,
                      <NavLink text="Allegations" href="#h2.html" active={this.isActive("#h2.html")} clickHandler={this.handleNavLinkClick} />,
                      <NavLink text="Risk Assessment" href="#h3.html" active={this.isActive("#h3.html")} clickHandler={this.handleNavLinkClick} />
                ];
    return (
      <NavLinks>
        {navLinks}
      </NavLinks>
    );
  }
}

const codeStyle = 'color:powderblue';

storiesOf('Navigation Components/NavLinksActiveHighlighter Sample', module)
    .add(
    'NavigationLinksActiveHighlighter',
    withInfo(`
        #### Usage
        - Working sample for NavLinks Active Highlighter.
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
                        const navLinks = [&lt;NavLink text="h1" href="#h1.html" active={this.isActive("#h1.html")} clickHandler={this.handleNavLinkClick} /&gt;,
                            &lt;NavLink text="h2" href="#h2.html" active={this.isActive("#h2.html")} clickHandler={this.handleNavLinkClick} /&gt;,
                            &lt;NavLink text="h3" href="#h3.html" active={this.isActive("#h3.html")} clickHandler={this.handleNavLinkClick} /&gt;
                        ];
                        return (
                            &lt;NavLinks&gt;
                                {navLinks}
                            &lt;/NavLinks&gt;
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

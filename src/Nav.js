import React, { PropTypes, Component } from 'react';


class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showNavBar: true,
      showLeftSide:true
    };
    this.renderNav = this.renderNav.bind(this);
    this.onNavshow = this.onNavshow.bind(this);
    this.showLeftItems = this.showLeftItems.bind(this);
  }

  onNavshow() {
    const { showNavBar } = this.state;
    this.setState({
      showNavBar: !showNavBar,
    });
  }

  renderNav() {
    if (this.state.showNavBar) {
      return (
        <nav className="navbar col-xs-12">
        </nav>
      );
    }
    return null;
  }

  showLeftItems(){
    if(this.state.showLeftSide){
      return ( <div className="nav-bar  col-md-2 col-sm-2 col-xs-12">
        <button onClick={this.onNavshow} className="menu-button hidden-xs"><span className={this.state.showNavBar ? 'glyphicon glyphicon-remove menu-remove' : 'glyphicon glyphicon-menu-hamburger menu-add'} /></button>
        {this.renderNav()}
      </div>)
    }return null;
  }
  render() {

    return (
        <div>
          {this.showLeftItems()}
      </div>

    );
  }
}
Nav.propTypes = {
  showLeftNav:PropTypes.func,
};
export default Nav;
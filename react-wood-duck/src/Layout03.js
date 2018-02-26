import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader.js';
import PageHeader from './PageHeader.js';
import SideBar from './SideBar.js';

class Layout03 extends React.Component {
  render() {
    const { globalHeaderProps, sideBarContent } = this.props;
    return (
      <div>
        <GlobalHeader {...globalHeaderProps} />
        <PageHeader />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideBar>{sideBarContent}</SideBar>
            </div>
            <div className="col-lg-9">
              <div>{this.props.children}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Layout03.propTypes = {
  globalHeaderProps: PropTypes.object,
  children: PropTypes.any,
  sideBarContent: PropTypes.node,
};

export default Layout03;

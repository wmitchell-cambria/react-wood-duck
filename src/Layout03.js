import React from 'react';
import PropTypes from 'prop-types';
import GlobalHeader from './GlobalHeader.js';
import PageHeader from './PageHeader.js';
import SideBar from './SideBar.js';

class Layout03 extends React.Component {
  render() {
    const { sideBarContent, sideBarColumnWidth } = this.props;
    return (
      <div>
        <GlobalHeader />
        <PageHeader />
        <SideBar columnWidth={sideBarColumnWidth}>{sideBarContent}</SideBar>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
Layout03.propTypes = {
  children: PropTypes.any,
  sideBarContent: PropTypes.node,
  sideBarColumnWidth: PropTypes.number,
};

export default Layout03;

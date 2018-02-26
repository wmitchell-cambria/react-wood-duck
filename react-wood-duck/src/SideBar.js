import Affix from 'react-overlays/lib/AutoAffix';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const SideBar = function(props) {
  const { children } = props;
  const classField = classNames('side-bar');
  if (!children || children.length === 0) {
    return null;
  } else {
    return (
      <Affix viewportOffsetTop={85}>
        <div className={classField} aria-label="Side Bar">
          {children}
        </div>
      </Affix>
    );
  }
};

SideBar.propTypes = {
  children: PropTypes.node,
};

export default SideBar;

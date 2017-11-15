import React from 'react';
import PropTypes from 'prop-types';

const NavLinks = function(props) {
  const { children, nested } = props;
  if (!children || children.length === 0) {
    return null;
  }
  const navLinks = <ul className="nav nav-stacked">{children}</ul>;
  if (nested) {
    return navLinks;
  } else {
    return (
      <div
        className="row"
        role="navigation"
        aria-label="Main Content Navigation Menu"
      >
        {navLinks}
      </div>
    );
  }
};

NavLinks.propTypes = {
  /** Component(s) to be rendered under NavLinks. Usually NavLink component(s) **/
  children: PropTypes.object,
  /** Is this NavLinks component nested inside another NavLinks/NavLink component **/
  nested: PropTypes.bool,
};

NavLinks.defaultProps = {
  nested: false,
};

export default NavLinks;

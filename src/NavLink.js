import React from 'react';
import PropTypes from 'prop-types';
import PreIcon from './PreIcon';
import PostIcon from './PostIcon';

const NavLink = function(props) {
  const activeNavLinkClassName = props.active
    ? 'active-navlink'
    : 'inactive-navlink';
  const activeAnchorClassName = props.active ? 'active' : '';
  const indentationClassName = `indent-level${props.indentationLevel}`;
  return (
    <li className="navlink" key={props.text}>
      <span className={activeNavLinkClassName + ' ' + indentationClassName} />
      <PreIcon icon={props.preIcon} />
      <a
        href={props.href}
        className={activeAnchorClassName}
        onClick={e => props.handleClick(props.href, e)}
      >
        {props.text}
      </a>
      <PostIcon icon={props.postIcon} />
      {props.children}
    </li>
  );
};

NavLink.propTypes = {
  /** NavLink Text  */
  text: PropTypes.string.isRequired,
  /** NavLink url/href */
  href: PropTypes.string.isRequired,
  /** Pre Icon css class name(s) */
  preIcon: PropTypes.string,
  /** Post Icon css class name(s) */
  postIcon: PropTypes.string,
  /** Indicates if current NavLink is actively selected */
  active: PropTypes.bool,
  /** Hyperlink On Click Handler. This can be used to indicate actively selected NavLink. */
  handleClick: PropTypes.func,
  /** It is used to align nested Navigation links */
  indentationLevel: PropTypes.number,
  /** This property is used to display nested elements under NavLink  */
  children: PropTypes.node,
};

NavLink.defaultProps = {
  active: false,
  indentationLevel: 0,
};

export default NavLink;

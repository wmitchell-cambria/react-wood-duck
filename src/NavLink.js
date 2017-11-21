import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PreIcon from './PreIcon';
import PostIcon from './PostIcon';
import Link from './Link';

const NavLink = function(props) {
  const activeNavLinkClassName = props.active
    ? 'active-navlink'
    : 'inactive-navlink';
  const indentationClassName = `indent-level${props.indentationLevel}`;
  return (
    <li className="navlink" key={props.text}>
      <span
        className={classNames(activeNavLinkClassName, indentationClassName)}
      />
      <PreIcon icon={props.preIcon} />
      <Link
        href={props.href}
        text={props.text}
        active={props.active}
        clickHandler={props.clickHandler}
      />
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
  clickHandler: PropTypes.func,
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

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Link = function(props) {
  const { text, href, active, clickHandler } = props
  const classes = classNames({ link: true, active: active })
  return (
    <a
      href={href}
      className={classes}
      onClick={event => clickHandler(props.href, event)}
    >
      {text}
    </a>
  )
}

Link.propTypes = {
  /** NavLink Text  */
  text: PropTypes.string.isRequired,
  /** NavLink url/href */
  href: PropTypes.string.isRequired,
  /** Indicates if current NavLink is actively selected */
  active: PropTypes.bool,
  /** Hyperlink On Click Handler. This can be used to indicate actively selected NavLink. */
  clickHandler: PropTypes.func,
}

Link.defaultProps = {
  active: false,
}

export default Link

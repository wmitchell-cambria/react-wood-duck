import React from 'react'
import PropTypes from 'prop-types'

const PreIcon = function(props) {
  const { icon } = props
  return icon ? <i className={`${icon} pre-icon`} /> : null
}

PreIcon.propTypes = {
  /** icon css class names */
  icon: PropTypes.string,
}

export default PreIcon

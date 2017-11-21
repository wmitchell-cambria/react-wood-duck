import React from 'react';
import PropTypes from 'prop-types';

const PostIcon = function(props) {
  const { icon } = props;
  return icon ? <i className={`${icon} post-icon`} /> : null;
};

PostIcon.propTypes = {
  /** icon css class names */
  icon: PropTypes.string,
};

export default PostIcon;

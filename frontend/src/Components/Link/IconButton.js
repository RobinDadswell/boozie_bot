import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'Components/Icon';
import styles from './IconButton.css';

function IconButton(props) {
  const {
    className,
    iconClassName,
    name,
    kind,
    size,
    isSpinning,
    ...otherProps
  } = props;

  return (
    <Link
      className={classNames(
        className
      )}
      {...otherProps}
    >
      <Icon
        className={iconClassName}
        name={name}
        kind={kind}
        size={size}
        isSpinning={isSpinning}
      />
    </Link>
  );
}

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  iconClassName: PropTypes.string,
  kind: PropTypes.string,
  name: PropTypes.object.isRequired,
  size: PropTypes.number,
  isSpinning: PropTypes.bool
};

IconButton.defaultProps = {
  className: styles.button,
  size: 12
};

export default IconButton;

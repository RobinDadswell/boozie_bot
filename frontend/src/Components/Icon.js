import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './Icon.css';

class Icon extends PureComponent {

  //
  // Render

  render() {
    const {
      containerClassName,
      className,
      name,
      size,
      title,
      isSpinning,
      ...otherProps
    } = this.props;

    const icon = (
      <FontAwesomeIcon
        className={classNames(
          className,
          styles["default"]
        )}
        icon={name}
        spin={isSpinning}
        style={{
          fontSize: `${size}px`
        }}
        {...otherProps}
      />
    );

    if (title) {
      return (
        <span
          className={containerClassName}
          title={title}
        >
          {icon}
        </span>
      );
    }

    return icon;
  }
}

Icon.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string,
  isSpinning: PropTypes.bool.isRequired,
  fixedWidth: PropTypes.bool.isRequired
};

Icon.defaultProps = {
  size: 14,
  isSpinning: false,
  fixedWidth: false
};

export default Icon;

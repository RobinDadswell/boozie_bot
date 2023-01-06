import PropTypes from 'prop-types';
import React from 'react';
import PageContent from 'Components/Page/PageContent';
import styles from './NotFound.css';

function NotFound({ message }) {
  return (
    <PageContent title="Missing in action">
      <div className={styles.container}>
        <div className={styles.message}>
          {message}
        </div>

        <img
          className={styles.image}
          src={`${window.location.origin}/Content/Images/404.png`}
          alt="Daddy Maddy hasn't made a page for this yet"
        />
      </div>
    </PageContent>
  );
}

NotFound.propTypes = {
  message: PropTypes.string.isRequired
};

NotFound.defaultProps = {
  message: "Daddy Maddy hasn't made a page for this yet"
};

export default NotFound;

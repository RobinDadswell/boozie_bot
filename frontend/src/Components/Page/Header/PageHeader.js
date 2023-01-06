import React, { Component } from "react";
import { icons } from 'Helpers/Props';
import IconButton from 'Components/Link/IconButton';
import styles from "./PageHeader.css";

class PageHeader extends Component {
  
render() {

    return (
      <div className={styles.header}>
        Ramanix is a penis
        <div className={styles.right}>
          <IconButton
            className={styles.home}
            name={icons.HOME}
            to="/"
            size={30}
          />
          <IconButton
            className={styles.paintbrush}
            title="Colours List"
            name={icons.PAINTBRUSH}
            to="/colours"
            size={30}
          />
        </div>
      </div>
    );
  }
}

export default PageHeader

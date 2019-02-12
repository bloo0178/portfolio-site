import React from "react";
import { IoMdArrowUp } from "react-icons/io";
import { FiChevronsUp } from 'react-icons/fi';
import styles from "./Footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.container}>
      <div className={styles.shape}>
      </div>
        <FiChevronsUp className={styles.icon} />
        <h4>TOP</h4>
      </div>
    );
  }
}

export default Footer;
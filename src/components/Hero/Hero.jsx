import React from "react";
import styles from "./Hero.module.scss";
import logo from "./images/logo.svg";
import semiCircle from "./images/semi_circle.svg";

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" width="100%" height="100%" />
        </div>

      </div>
    );
  }
}

export default Hero;

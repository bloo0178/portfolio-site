import React from "react";
import styles from "./Hero.module.scss";
import logo from "./images/logo2.svg";
import logo2 from "./images/logo3.svg";

// Trying to get logo to scale with screensize. Viewbox/ port = vh/ vw?

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          {/*<img src={logo} alt="" width="300px" />*/}
        </div>
        <div className={styles.test}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
            <ellipse fill="white" cx="50" cy="50" rx="50" ry="50" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Hero;

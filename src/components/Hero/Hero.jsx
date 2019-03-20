import React from "react";
import styles from "./Hero.module.scss";

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Jeff Bloom</h1>
          <h2>// Full Stack Dev</h2>
          <h2>// Solutions Architect</h2>
        </div>
        <div />
      </div>
    );
  }
}

export default Hero;

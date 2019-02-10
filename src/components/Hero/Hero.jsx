import React from "react";
import styles from "./Hero.module.scss";

class Hero extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Jeff Bloom</h1>
        </div>
        <div>put icons for github, linkedin here</div>
        <div>Add arrow at the bottom, or parallax effect</div>
      </div>
    );
  }
}

export default Hero;

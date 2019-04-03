import React from "react";
import styles from "./Hero.module.scss";
//import HeroImage from '../HeroImage';

class Hero extends React.Component {
  render() {
    return (
        <div className={styles.container}>
          <div className={styles.title}>
            {/*eslint-disable-next-line*/}
            <h1>{`Jeff Bloom`}</h1>
            {/*eslint-disable-next-line*/}
            <h2>// Full Stack Dev</h2>
          </div>
          <div className={styles.left} />
          <div />
        </div>
    );
  }
}

export default Hero;

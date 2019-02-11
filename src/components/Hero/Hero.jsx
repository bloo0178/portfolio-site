import React from "react";
import styles from "./Hero.module.scss";

const Hero = props => {

  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <h1>Jeff Bloom</h1>
        </div>
        <div>put icons for github, linkedin here</div>
        <div>Add arrow at the bottom, or parallax effect</div>
        <div>Allow black page to dip into top of white as a triangle</div>
        <div>Use a dotted line with a triangle to do the same from About to Projects</div>
        <div>Make ABOUT page 100vh</div>
    </div>
  );
};

/*class Hero extends React.Component {
  
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
}*/

export default Hero;

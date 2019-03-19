import React from "react";
import styles from "./Hero.module.scss";
import { IoMdArrowDown } from "react-icons/io";

class Hero extends React.Component {
  state = {
    currentScrollHeight: 0
  };

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 15) * 15;
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight });
      }
    };
  }

  render() {
    const opacity = Math.min(45 / this.state.currentScrollHeight, 1);
    return (
      <div className={styles.container}>
        <div className={styles.title} style={{ opacity }}>
          <h1>Full Stack Dev / Solutions Architect</h1>
        </div>
        <div style={{ opacity }}>
          <p>
            My name is <strong>Jeff Bloom</strong>. I am passionate about the
            infinite pursuit of learning, applying, and improving technology to
            evolve the things we do and how we do them. My chosen niche is
            software development, with my technical skills being grounded in
            over a decade of practical business experience.
          </p>
        </div>
        {/*<IoMdArrowDown
          className={`${styles.icon} ${styles.bounce}`}
          style={{ opacity }}
        />*/}
      </div>
    );
  }
}

export default Hero;

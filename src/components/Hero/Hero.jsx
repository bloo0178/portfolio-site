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
            My name is <strong>Jeff Bloom</strong>. I am passionate about
            all things software, and currently work heavily with the MERN stack
            (MongoDB, Express, React, & Node).
          </p>
          <p>
            Prior to following a software development career path, I built 10+
            years of experience as both a Systems Analyst within a large, global
            corporation and most recently as a Solutions Architect at a
            nationally-recognized digital business consultancy.
          </p>

          <p>
            My background has provided me firsthand insights into many different
            aspects of the IT, custom software, and business technology worlds -
            and also how they all tie together in the context of larger
            objectives.
          </p>
          <p>
            This site is intended to serve as a showcase of my technical
            skillset. If my background and capabilities interest you or you'd
            like to learn more, let's connect and talk further!
          </p>
        </div>
        <IoMdArrowDown
          className={`${styles.icon} ${styles.bounce}`}
          style={{ opacity }}
        />
      </div>
    );
  }
}

export default Hero;

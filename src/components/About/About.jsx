import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
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
        <h2>About Me</h2>
        <p>
          Prior to shifting my focus to software development, I built 10+ years
          of experience as both a Systems Analyst within a large, global
          corporation and most recently as a Solutions Architect at a
          nationally-recognized digital business consultancy.
        </p>
        <p>
          My background has provided me unique insights across a variety of
          industries into how user needs drive businesses and shape technology
          ad infinitum. I have seen firsthand the opportunities and obstacles
          this reality has posed to literally dozens of varying organizations. I
          am truly grateful for this experience as it has conditioned my ability
          to make thoughtful decisions and recommendations - balancing thinking
          about what I'm doing or how I'm doing it within the broader context of
          the users and the business.
        </p>
        <p>
          The majority of this site is intended to serve as a showcase of my
          technical skillset. If my background and capabilities interest you or
          you'd like to learn more, don't hesitate to connect so that we can
          continue the conversation!
        </p>
      </div>
    );
  }
}

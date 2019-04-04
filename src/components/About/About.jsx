import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.content}>
          <p>
            I am obsessed with the infinite pursuit of learning and applying
            technology to evolve the things we do. My
            personal passion is software development.
          </p>
          <p>
            I have over a decade of professional experience mixing equal parts
            systems and design thinking. Most recently I worked
            as a Solutions Architect at an award-winning digital business
            consultancy. I find being part of deeply-engaged teams very
            rewarding, and have extensive experience leading and taking part in
            complex efforts inclusive of UX, BA, Dev, QA, and PM talent.
          </p>
          <p>
            My work with dozens of organizations has provided me a practical
            view into the relationship between user needs and business goals.
            This has taught me to avoid technology bias - leverage what makes
            sense within the context of the situation and embrace
            innovation that sparks evolution.
          </p>
        </div>
      </div>
    );
  }
}

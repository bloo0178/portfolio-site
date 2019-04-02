import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.content}>
          <p>
            I am absolutely obsessed with the infinite loop of learning,
            applying, and improving technology to evolve the things we do and
            how we do them. My passion is software engineering, with my
            technical skills being grounded in over 10 years of practical
            business experience.
          </p>
          <p>
            I have held multiple Business Systems Analyst roles within a major
            global corporation and most recently held a Solutions Architect role
            at a nationally-recognized digital business consultancy. I've
            operated within a variety of team structures and have extensive
            experience leading complex initiatives inclusive of UX, BA, Dev, QA,
            and PM talent.
          </p>
          <p>
            My experience with dozens of organizations across various industries
            has provided me insight into the ideal iterative cycle of
            identifying user needs to drive business and organizational goals,
            and only then making technology choices. I try to avoid dogmatic
            views towards any particular technology, and instead work backwards
            from the intended use cases. I believe maintaining this position of
            adaptability and relative fluency towards all relevant tech trends is
            key for individuals and businesses alike to staying competitive in our
            increasingly tech-centric world.
          </p>
          <p>
            My current focus has been React and it's extensive ecosystem for
            interface and mobile development, and the use of serverless stacks
            for backend implementations. If my background and capabilities
            interest you, don't hesitate to connect so that we can continue the
            conversation!
          </p>
        </div>
      </div>
    );
  }
}

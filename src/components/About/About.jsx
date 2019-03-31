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
            My direct experience with dozens of organizations across various
            industries has provided me insight into the ideal iterative cycle of
            identifying user needs to drive business and organizational goals,
            which in turn inform technology choices. I've learned to avoid
            dogmatic views towards any particular technology and instead
            recognize that every technology choice has pros and cons, as well as
            an ideal use case. I believe a major component of staying
            competitive in today's tech-centric business landscape is to
            maintain a position of relative fluency and adaptability with
            respect to all modern technology trends.
          </p>
          <p>
            Technologies that currently interest me are React and it's extensive
            ecosystem for interface and mobile development, and serverless
            stacks for backend implementations. If my background and
            capabilities interest you, don't hesitate to connect so that we can
            continue the conversation!
          </p>
        </div>
      </div>
    );
  }
}

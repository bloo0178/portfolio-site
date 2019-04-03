import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.content}>
          <p>
            I am absolutely obsessed with the infinite pursuit of learning and
            applying technology to evolve the things we do and the way we do
            them. My passion is software engineering, and my technical skills
            are complemented by over a decade of pragmatic business experience.
          </p>
          <p>
            I have held Business Systems Analyst roles for global organizations,
            and most recently worked as a Solutions Architect at a
            nationally-recognized digital business consultancy. I truly enjoy
            working as part of a tight team, and have deep experience leading
            complex initiatives inclusive of UX, BA, Dev, QA, and PM talent.
          </p>
          <p>
            My experience with dozens of organizations and industries has
            provided me a practical view into how user needs should drive
            business goals. I try to avoid dogmatic views towards technology for
            this reason. Flowing with meaningful innovation to continually
            evolve what you do and how you do it is paramount to staying useful.
          </p>
          <p>
            My focus has most recently been directed at React and it's extensive
            ecosystem for interface development, and the use of serverless
            stacks for backend implementations. If my background interests you,
            let's connect so that we can continue the conversation!
          </p>
        </div>
      </div>
    );
  }
}

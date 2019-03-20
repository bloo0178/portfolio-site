import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>About</h2>
        <div className={styles.content}>
          <p>
            I am absolutely obsessed with the infinite pursuit of learning,
            applying, and improving technology to evolve the things we do and
            how we do them.
          </p>
          <p>
            My passion is software development, with my technical skills being
            grounded in over a decade of practical business experience. I have
            held roles as both a Business Systems Analyst within a global
            corporation and most recently as a Solutions Architect at a
            nationally-recognized digital business consultancy.
          </p>
          <p>
            My direct experience with dozens of organizations across a variety
            of industries has provided me direct insight into how user needs
            drive business and shape technology ad infinitum. This in turn has
            shaped the way I think about technology - always within the broader
            context of user, organizational and business goals.
          </p>
          <p>
            The remainder of this site is intended to serve as a showcase of my
            technical skillset. If my background and capabilities interest you,
            don't hesitate to connect so that we can continue the conversation!
          </p>
        </div>
      </div>
    );
  }
}

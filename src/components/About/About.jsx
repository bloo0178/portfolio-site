import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>About</h1>
        <div className={styles.content}>
          <p>
            I am fascinated with the infinite challenge of learning and applying
            technology to evolve the things we do. My passion is software
            development, and I have over a decade of experience applying systems
            and design thinking.
          </p>
          <p>
            I have deep experience working between businesses and users, and
            defining how to use technology to support those relationships. Most
            recently I was a Solutions Architect at an award-winning digital
            business consultancy - collaborating with UX designers and
            developers to create tailored digital strategies paired with custom
            software solutions.
          </p>
          <p>
            I currently work heavily with React for interface development and
            have been using serverless approaches for backend development. That
            said, I am not rigid in my technology choices and refresh my
            knowledge regularly. If my background interests you, please don't
            hesitate to connect with me.
          </p>
        </div>
      </div>
    );
  }
}

import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
  render() {
    return (
      <div>
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
          this reality has posed to literally dozens of varying organizations,
          and have been involved in the strategy formation and tactical
          execution to tackle these situations.
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

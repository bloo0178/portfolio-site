import React from "react";
import styles from "./Projects.module.scss";
import Card from "../Card/Card";

// eslint-disable-next-line
let sampleData = [
  {
    title: "Title",
    description: `Quo alii voluptua apeirian in. Ex modus noster nostrum sed. Qui no
  paulo platonem, has te ridens praesent.`,
    source: "#",
    demo: "#"
  }
];

class Projects extends React.Component {

  render() {
    return (
      <div className={styles.container}>
        <div>
          <h2>Projects</h2>
        </div>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Projects;

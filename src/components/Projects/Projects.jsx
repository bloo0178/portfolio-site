import React from "react";
import styles from "./Projects.module.scss";
import Card from "../Card/Card";
import axios from 'axios';

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
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`https://7c0gcbb2ua.execute-api.us-east-1.amazonaws.com/prod`)
    .then(res => {
      console.log(res.data);
      const projects = res.data.Items; 
      this.setState({ projects })
    })
  }

  projectCards = () => (
    <>
    {this.state.projects.map(project => (
      <Card 
      key={project.projectId}
      description={project.description}
      title={project.name}
      demoUrl={project.demoUrl}
      srcUrl={project.codeUrl}
      />
    ))}
    </>
  )

  render() {
    return (
      <div className={styles.container}>
        <div>
          <h2>Projects</h2>
        </div>
        <div className={styles.cards}>
        {this.projectCards()}
          {/*<Card
            title="test"
            description="Quo alii voluptua apeirian in. Ex modus noster nostrum sed. Qui no
            paulo platonem, has te ridens praesent."
            demoURL="jeffbloom.io"
            srcURL="jeffbloom.io"
          />*/}
        </div>
      </div>
    );
  }
}

export default Projects;

import React from "react";
import styles from "./Projects.module.scss";
import Card from "../Card/Card";
import axios from 'axios';

class Projects extends React.Component {
  state = {
    projects: []
  }

  componentDidMount() {
    axios.get(`https://hs8hwq33o9.execute-api.us-east-1.amazonaws.com/dev/projects`)
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
      tech={project.tech}
      />
    ))}
    </>
  )

  render() {
    return (
      <div className={styles.container}>
      <h1>Projects</h1>
        <div className={styles.cards}>
        {this.projectCards()}
        </div>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import styles from "./App.module.scss";
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero";
import Projects from '../Projects/Projects';

class App extends Component {


  

  render() {
    return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Projects />
      </div>
    );
  }
}

export default App;

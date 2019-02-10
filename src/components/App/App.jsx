import React, { Component } from "react";
import styles from "./App.module.scss";
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from '../Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;

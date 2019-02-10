import React, { Component } from "react";
import styles from "./App.module.scss";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from './components/Projects/Projects';

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

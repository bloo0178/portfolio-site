import React, { Component } from "react";
import styles from "./App.module.scss";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from '../Footer/Footer';

import Projects from "../Projects/Projects";
import { About } from "../About/About";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

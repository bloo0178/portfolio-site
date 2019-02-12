import React, { Component } from "react";
import styles from "./App.module.scss";
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;

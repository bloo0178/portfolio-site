import React from "react";
import styles from "./Navbar.module.scss";
import { IoLogoLinkedin, 
  IoLogoGithub, 
 } from "react-icons/io";

class NavBar extends React.Component {

  render() {
    return (
      <nav className={styles.navbar}>
      <div className={styles.iconsContainer}>
        <a href={"https://www.linkedin.com/in/bloomjeff/"}><IoLogoLinkedin className={styles.icon} /></a>
        <a href={"https://github.com/bloo0178"}><IoLogoGithub className={styles.icon} /></a>
        </div>
      </nav>
    )
  }
}

export default NavBar;

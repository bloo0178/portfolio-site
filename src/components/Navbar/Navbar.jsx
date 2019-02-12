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
        <IoLogoLinkedin className={styles.icon} />
        <IoLogoGithub className={styles.icon} />
        </div>
      </nav>
    )
  }
}

export default NavBar;

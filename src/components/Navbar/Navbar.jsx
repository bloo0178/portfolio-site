import React from "react";
import styles from "./Navbar.module.scss";

class NavBar extends React.Component {

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return (
      <nav className={styles.navbar}>
        <a href="#" >Portfolio</a>
        <a href="#" >About</a>
      </nav>
    )
  }
}

export default NavBar;

import React from "react";
import styles from "./Hero.module.scss";
import { IoMdArrowDown } from "react-icons/io";


class Hero extends React.Component {
  state = {
    currentScrollHeight: 0
  };

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 15) * 15;
      if (this.state.currentScrollHeight !== newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight });
      }
    };
  }

  render() {
    const opacity = Math.min(45 / this.state.currentScrollHeight, 1);
    return (
      <div className={styles.container}>
        <div className={styles.title} style={{ opacity }}>
          <h2>Full Stack Dev / Solutions Architect</h2>
        </div>
        <div style={{ opacity }}>
          <p>
            Lorem ipsum dolor sit amet, congue tincidunt cu nec, diam exerci id
            sed. Ne pri errem alterum, ne quis quaerendum est, dico inimicus his
            te. Fierent urbanitas vel te, in soleat commune tacimates est. Solum
            populo dissentiet sed et, eu fugit oblique eam. Nullam quodsi
            appellantur ad usu.
          </p>
        </div>
        <IoMdArrowDown
          className={`${styles.icon} ${styles.bounce}`}
          style={{ opacity }}
        />
      </div>
    );
  }
}

export default Hero;

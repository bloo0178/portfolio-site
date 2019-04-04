import React from "react";
import styles from "./Card.module.scss";

class Card2 extends React.Component {
  render() {
    const { demoUrl, srcUrl, title, tech } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.corner} />
        <div>
          <h3>{title}</h3>
        </div>
        <div className={styles.stack}>
          <p>Stack: {tech}</p>
        </div>
        <div className={styles.links}>
          <a href={demoUrl}>Demo ></a>
          <a href={srcUrl}>Source ></a>
        </div>
      </div>
    );
  }
}

// validate proptypes here

export default Card2;

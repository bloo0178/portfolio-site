import React from "react";
import styles from "./Card.module.scss";

class Card extends React.Component {
  render() {
    const { demoUrl, srcUrl, title, description, tech } = this.props;
    return (
      <div className={styles.container}>
      <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div className={styles.corner}></div>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
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

export default Card;

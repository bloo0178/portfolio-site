import React from "react";
import styles from "./Card.module.scss";

class Card extends React.Component {
  render() {
    const { demoURL, srcURL, title, description } = this.props;
    return (
      <div className={styles.container}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className={styles.links}>
          <a href={demoURL}>Demo ></a>
          <a href={srcURL}>Source ></a>
        </div>
      </div>
    );
  }
}

// validate proptypes here

export default Card;

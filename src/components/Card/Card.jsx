import React from "react";
import styles from "./Card.module.scss";

class Card extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div>
          <h3>Title</h3>
        </div>
        <div>
          <p>
            Quo alii voluptua apeirian in. Ex modus noster nostrum sed. Qui no
            paulo platonem, has te ridens praesent.
          </p>
        </div>
        <div className={styles.links}>
          <a href="https://jeffbloom.io">Demo ></a>
          <a href="https://jeffbloom.io">Source ></a>
        </div>
      </div>
    );
  }
}

// validate proptypes here

export default Card;

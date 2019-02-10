import React from "react";
import styles from "./About.module.scss";

class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, congue tincidunt cu nec, diam exerci id
          sed. Ne pri errem alterum, ne quis quaerendum est, dico inimicus his
          te. Fierent urbanitas vel te, in soleat commune tacimates est. Solum
          populo dissentiet sed et, eu fugit oblique eam. Nullam quodsi
          appellantur ad usu.
        </p>
        <p>
          {" "}
          Id sea libris virtute, case rationibus elaboraret ut eum. Eum harum
          salutandi no. Eu his nulla omnes, has quidam facete eu. Ne mea odio
          minim, nobis corpora ei mea. Qui lorem officiis ea. Novum homero
          appareat ea eam, per porro altera volutpat eu.
        </p>
        <p>
          {" "}
          Quo alii voluptua apeirian in. Ex modus noster nostrum sed. Qui no
          paulo platonem, has te ridens praesent. Eam atomorum mandamus
          expetenda cu.
        </p>
      </div>
    );
  }
}

export default About;

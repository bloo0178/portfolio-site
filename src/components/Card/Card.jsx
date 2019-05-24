import React from "react";
import styles from "./Card.module.scss";

class Card extends React.Component {
	render() {
		const { demoUrl, title, tech, backendSource, frontendSource } = this.props;
		return (
			<div className={styles.container}>
				<div className={styles.title}>
					<h3>{title}</h3>
				</div>
				<div className={styles.stack}>
					<p><strong>Stack: </strong>{tech}</p>
				</div>
				<div className={styles.links}>
					<a href={demoUrl}>Demo ></a>
					{backendSource && (
						<a href={backendSource}>Backend Source ></a>
          )}
          {frontendSource && (
            <a href={frontendSource}>Frontend Source ></a>
          )}
				</div>
			</div>
		);
	}
}

// validate proptypes here

export default Card;

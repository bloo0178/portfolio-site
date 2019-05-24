import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>About</h1>
					<p>
						I am passionate about applying technology to
						evolve the things we do and how we do them. My
						focus is software development and system
						architecture, grounded in over a decade of
						professional experience.
					</p>
					<p>
						I have worked between businesses and users
						throughout my career - defining how to use
						technology to support those relationships. Most
						recently as a Solutions Architect at an
						award-winning digital business consultancy, I
						collaborated with UX designers and developers to
						define and implement digital strategies paired
						with custom software solutions.
					</p>
					<p>
						I currently enjoy using React for interface
						development and serverless approaches for backend
						needs. I am not rigid in my technology choices,
						however, and refresh my knowledge regularly.
					</p>
					<p>
						I am interested in opportunities that involve
						solving practical business or systemic problems
						through focused analysis, system design, and
						directed software development. If my background
						interests you, let's connect and see how we can
						work together.
					</p>
				</div>
			</div>
		);
	}
}

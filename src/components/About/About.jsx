import React from "react";
import styles from "./About.module.scss";

export class About extends React.Component {
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>About</h1>
					<p>
						I am fascinated with the infinite challenge of
						learning and applying technology to evolve the
						things we do. My passion is software development,
						grounded in over a decade of professional
						experience applying systems and design thinking.
					</p>
					<p>
						I have worked between businesses and users
						throughout my career - defining how to use
						technology to support those relationships. Most
						recently as a Solutions Architect at an
						award-winning digital business consultancy, I
						collaborated with UX designers and developers to
						create digital strategies paired with custom
						software solutions.
					</p>
					<p>
						I currently work heavily with React for interface
						development and have been using serverless
						approaches for backend needs. I am not rigid in my
						technology choices and refresh my knowledge
						regularly.
					</p>
					<p>
						I am interested in opportunities that involve
						solving practical business or systemic problems
						through focused analysis, system design, and
						ultimately directed software development. If my
						background interests you, let's connect and see
						how we can work together.
					</p>
				</div>
			</div>
		);
	}
}

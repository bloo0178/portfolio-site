import React from "react";
import { create } from "react-test-renderer";
import { About } from "./About";

describe("Card component", () => {
	test("it matches the snapshot", () => {
		const component = create(<About />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});

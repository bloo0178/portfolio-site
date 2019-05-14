import React from "react";
import { create } from "react-test-renderer";
import NavBar from "./Navbar";

describe("NavBar component", () => {
	test("it matches the snapshot", () => {
		const component = create(<NavBar />);
		expect(component.toJSON()).toMatchSnapshot();
	});
});
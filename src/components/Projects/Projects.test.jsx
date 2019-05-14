import React from "react";
import {shallow} from "enzyme";
import Projects from "./Projects";

const state = [
	{
		codeUrl: "https://github.com/bloo0178/sendbird-chat-client",
		demoUrl: "https://sendbird-chat.jeffbloom.io/",
		name: "SendBird Chat App",
		projectId: "001",
		tech: "React, AWS (Amplify), SendBird Chat SDK, Material UI"
	}
];

describe("Projects component", () => {
	test("it matches the snapshot", () => {
        let wrapper = shallow(<Projects />);
        wrapper.setState(state);
		expect(wrapper).toMatchSnapshot();
	});
});

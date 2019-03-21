import React from "react";
import { create } from "react-test-renderer";
import Card from "./Card";

const props = {
  demoURL: "demoURL.com",
  srcURL: "srcURL.com",
  title: "Test Title",
  description: `This is a project's description`
};

describe("Card component", () => {
  const { demoURL, srcURL, title, description } = props;
  test("it matches the snapshot", () => {
    const component = create(
      <Card
        demoURL={demoURL}
        srcURL={srcURL}
        title={title}
        description={description}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

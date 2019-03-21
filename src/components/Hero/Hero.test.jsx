import React from "react";
import { create } from "react-test-renderer";
import Hero from "./Hero";

describe("Hero component", () => {
  test("it matches the snapshot", () => {
    const component = create(<Hero />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});

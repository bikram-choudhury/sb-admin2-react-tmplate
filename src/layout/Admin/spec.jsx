import React from "react";
import { shallow } from "enzyme";
import Admin from "./Admin";

describe("Authentication", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Admin />);
    });
    it("should render", () => {
		expect(component.find("div")).toBeTruthy();
	});
});
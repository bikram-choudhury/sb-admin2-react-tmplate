import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Dashboard />);
    });
    it("should render", () => {
		expect(component.find("div")).toBeTruthy();
	});
});
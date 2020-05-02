import React from "react";
import { shallow } from "enzyme";
import BlankDocument from "./BlankDocument";

describe("Dashboard", () => {
	let component;
	beforeEach(() => {
		component = shallow(<BlankDocument />);
	});
	it("should render", () => {
		expect(component.find("h1")).toBeTruthy();
		expect(component.find("h1").text()).toEqual("Blank Page");
	});
});
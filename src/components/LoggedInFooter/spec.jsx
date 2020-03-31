import React from "react";
import { shallow } from "enzyme";
import LoggedInFooter from "./LoggedInFooter";

describe("LoggedInFooter", () => {
	let component;
	beforeEach(() => {
		component = shallow(<LoggedInFooter />);
    });
    it("should render", () => {
		expect(component.find("footer")).toBeTruthy();
	});
});
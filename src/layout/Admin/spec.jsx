import React from "react";
import { shallow } from "enzyme";
import Admin from "./Admin";

describe("Admin", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Admin />);
    });
    it("should render", () => {
		expect(component.find("div")).toBeTruthy();
		expect(component.find("SideBar")).toBeTruthy();
		expect(component.find("NavBar")).toBeTruthy();
		expect(component.find(".container-fluid")).toBeTruthy();
		expect(component.find("LoggedInFooter")).toBeTruthy();
	});
});
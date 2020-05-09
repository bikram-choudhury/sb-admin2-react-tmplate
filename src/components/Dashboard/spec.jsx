import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";
import { CardBoxData } from "../Cards/_card";

describe("Dashboard", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Dashboard />);
	});
	it("should render", () => {
		expect(component.find("h1").text()).toEqual('Dashboard');
		expect(component.find("CardBox")).toHaveLength(CardBoxData.length);
		expect(component.find("LineChart")).toHaveLength(1);
		expect(component.find("LineChart").prop('title')).toEqual('Earnings');
		expect(component.find("DoughnutChart").prop('cutoutWidth')).toEqual(60);
		expect(component.find("ProgressBar")).toHaveLength(5);
	});
});
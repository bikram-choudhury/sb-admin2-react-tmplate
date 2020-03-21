/*
Unit tests are really about testing what is specific to that component. 
In this case you only need to test that you have properly configured the Route elements. 
Any child components have their own tests,
and Switch and Route should be tested in the library they are from.

https://stackoverflow.com/a/51586418
*/
import React from "react";
import { shallow } from "enzyme";
import Authentication from "./Authentication";

const SignIn = React.lazy(() => import("../../components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("../../components/SignUp/SignUp"));

describe("Authentication", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Authentication />);
	});
	it("should render", () => {
		expect(component.find("#wrapper")).toHaveLength(1);
	});
	it('should render "SignIn"', async () => {
		const routeEl = component.find('Route[path="/sign-in"]');		
		expect(JSON.stringify(routeEl.first().prop("component"))).toEqual(JSON.stringify(SignIn));
	});
	it('should render "SignUp"', () => {
		const routeEl = component.find('Route[path="/sign-up"]');
		expect(JSON.stringify(routeEl.first().prop("component"))).toBe(JSON.stringify(SignUp));
	});
});

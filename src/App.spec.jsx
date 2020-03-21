import checkPropTypes from "check-prop-types";
import { shallow } from "enzyme";
import React from "react";
import App from "./App";

const Admin = React.lazy(() => import("./layout/Admin/Admin"));
const Authentication = React.lazy(() => import("./layout/Authentication/Authentication"));

describe("Testing App", () => {
	it("should render", () => {
		const component = shallow(<App />);
		expect(component).toBeTruthy();
		component.unmount();
	});

	describe("check App prop-types", () => {
		it("should not throw error", () => {
			const props = { accessToken: "test" };
			// eslint-disable-next-line react/forbid-foreign-prop-types
			const result = checkPropTypes(App.propTypes, props, "props", App.name);
			expect(result).toBeUndefined();
		});
		it("should throw error", () => {
			const props = {};
			// eslint-disable-next-line react/forbid-foreign-prop-types
			const result = checkPropTypes(App.propTypes, props, "props", App.name);
			expect(result).toBeDefined();
		});
	});
	describe("onAuthFail", () => {
		it("should return location object", () => {
			const component = shallow(<App />);
			const instance = component.instance();
			const location = "/hello";
			const expectedValue = { pathname: "/sign-in", state: { from: location } };
			const result = instance.onAuthFail(location);
			expect(result).toEqual(expectedValue);
			component.unmount();
		});
	});
	describe("renderAuthRoutes", () => {
		it("should return Authentication - component", () => {
			const component = shallow(<App />);
			const instance = component.instance();
			const result = instance.renderAuthRoutes();

			// not sure how to implement this lazy load testcase
			expect(JSON.stringify(result.type)).toEqual(JSON.stringify(Authentication));
			component.unmount();
		});
		it("should return Redirect - component", () => {
			const component = shallow(<App accessToken="test" />);
			const instance = component.instance();
			const result = instance.renderAuthRoutes();

			expect(result.props.to).toEqual("/");
			component.unmount();
		});
	});
	describe("renderAdminRoute", () => {
		it("should return Admin - component", () => {
			const component = shallow(<App accessToken="test" />);
			const instance = component.instance();
			const result = instance.renderAdminRoute({ location: "/home" });

			// not sure how to implement this lazy load testcase
			expect(JSON.stringify(result.type)).toEqual(JSON.stringify(Admin));
			component.unmount();
		});
		it("should return Redirect - component", () => {
			const component = shallow(<App />);
			const instance = component.instance();
			const result = instance.renderAdminRoute({ location: "/home" });

			expect(result.props.to.pathname).toEqual("/sign-in");
			component.unmount();
		});
	});
	describe("Admin - layout", () => {
		let component;
		afterEach(() => {
			component.unmount();
		});
		it("should render ", () => {
			component = shallow(<App accessToken="" />);
			const routeEl = component.find('Route[path="/"]');
			expect(routeEl.first().prop("render")).toBe(
				component.instance().renderAdminRoute
			);
		});
	});
	describe("Authentication - layout", () => {
		let component;
		afterEach(() => {
			component.unmount();
		});
		it("Route: sign-in", () => {
			component = shallow(<App accessToken="" />);
			const routeEl = component.find('Route[path="/sign-in"]');
			expect(routeEl.first().prop("render")).toBe(
				component.instance().renderAuthRoutes
			);
		});
		it("Route: sign-up", () => {
			component = shallow(<App accessToken="" />);
			const routeEl = component.find('Route[path="/sign-up"]');
			expect(routeEl.first().prop("render")).toBe(
				component.instance().renderAuthRoutes
			);
		});
	});
});

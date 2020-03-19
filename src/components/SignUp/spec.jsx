import { shallow } from "enzyme";
import React from "react";
import * as AuthContext from "../../contexts/AuthContext";
import SignUp, { signUpFormOnSubmit, validatePassword } from "./SignUp";
import * as AuthApi from "../../services/authentication/authentication.api";
import * as formHook from "react-hook-form";

describe("SignUp Component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});
	it("should render", () => {
		const contextValue = { authDispatch: jest.fn() };
		jest
			.spyOn(AuthContext, "useAuthContext")
			.mockImplementation(() => contextValue);

		const component = shallow(<SignUp />);
		expect(component.find(".container")).toIncludeText("Create an Account");
	});

	it("handleSubmit should get call on form submit", () => {
		const contextValue = { authDispatch: jest.fn() };
		jest
			.spyOn(AuthContext, "useAuthContext")
			.mockImplementation(() => contextValue);

		const formContext = {
			handleSubmit: jest.fn(),
			watch: jest.fn(),
			register: jest.fn(),
			errors: {}
		};
		jest.spyOn(formHook, "useForm").mockImplementation(() => formContext);

		const component = shallow(<SignUp />);
		component
			.find('input[name="firstName"]')
			.simulate("change", { target: { value: "firstName" } });
		component
			.find('input[name="lastName"]')
			.simulate("change", { target: { value: "lastName" } });
		component
			.find('input[name="email"]')
			.simulate("change", { target: { value: "email@google.com" } });
		component
			.find('input[name="password"]')
			.simulate("change", { target: { value: "password" } });
		component
			.find('input[name="confirmPassword"]')
			.simulate("change", { target: { value: "confirmPassword" } });
		component.find("button.user-register").simulate("submit");

		expect(
			component.find('input[name="firstName"]').prop("aria-invalid")
		).toBe("false");
		expect(
			component.find('input[name="lastName"]').prop("aria-invalid")
		).toBe("false");
		expect(
			component.find('input[name="email"]').prop("aria-invalid")
		).toBe("false");
		expect(
			component.find('input[name="password"]').prop("aria-invalid")
		).toBe("false");
		expect(
			component.find('input[name="confirmPassword"]').prop("aria-invalid")
		).toBe("false");

		expect(formContext.handleSubmit).toBeCalled();
	});

	it("signUpFormOnSubmit should call saveUsers", () => {
		jest.spyOn(AuthApi, "saveUsers");
		const dispatch = jest.fn();
		const expectedData = {
			firstName: "firstName",
			lastName: "lastName",
			email: "email@google.com",
			password: "password",
			username: "email@google.com"
		};

		signUpFormOnSubmit(
			dispatch, { ...expectedData, confirmPassword: "test" }
		);
		expect(AuthApi.saveUsers).toBeCalledTimes(1);
		expect(AuthApi.saveUsers).toHaveBeenCalledWith(expectedData, dispatch);
	});

	describe("validatePassword", () => {
		it("should return true", () => {
			expect(validatePassword("test", "test")).toBeTruthy();
		});
		it("should return false", () => {
			expect(validatePassword("test", "false")).toBeFalsy();
		});
	});

	it("Errors handling", () => {
		const contextValue = { authDispatch: jest.fn() };
		jest
			.spyOn(AuthContext, "useAuthContext")
			.mockImplementation(() => contextValue);

		const formContext = {
			handleSubmit: jest.fn(),
			watch: jest.fn(),
			register: jest.fn(),
			errors: {
				firstName: { type: "required" },
				lastName: { type: "required" },
				email: { type: "required" },
				password: { type: "required" },
				confirmPassword: { type: "required" }
			}
		};
		jest.spyOn(formHook, "useForm").mockImplementation(() => formContext);

		const component = shallow(<SignUp />);
		component.find("button.user-register").simulate("submit");

		expect(
			component.find('input[name="firstName"]').prop("aria-invalid")
		).toBe("true");
		expect(
			component.find('input[name="lastName"]').prop("aria-invalid")
		).toBe("true");
		expect(
			component.find('input[name="email"]').prop("aria-invalid")
		).toBe("true");
		expect(
			component.find('input[name="password"]').prop("aria-invalid")
		).toBe("true");
		expect(
			component.find('input[name="confirmPassword"]').prop("aria-invalid")
		).toBe("true");
	});

	it("Errors handling for repeatpassword", () => {
		const contextValue = { authDispatch: jest.fn() };
		jest
			.spyOn(AuthContext, "useAuthContext")
			.mockImplementation(() => contextValue);

		const formContext = {
			handleSubmit: jest.fn(),
			watch: jest.fn(),
			register: jest.fn(),
			errors: {
				confirmPassword: { type: "validate" }
			}
		};
		jest.spyOn(formHook, "useForm").mockImplementation(() => formContext);

		const component = shallow(<SignUp />);
		component.find("button.user-register").simulate("submit");

		expect(component.find('small[data-error="repeatpassword"]')).toBeTruthy();
	});
});

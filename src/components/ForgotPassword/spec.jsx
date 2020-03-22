import React from "react";
import { shallow } from "enzyme";
import ForgotPassword, { passwordResetOnSubmit, validatePassword } from "./ForgotPassword";
import * as AuthApi from "../../services/authentication/authentication.api";
import * as formHook from "react-hook-form";
import { flushPromises } from '../../../jest.helper';

describe("Authentication", () => {
	let component;
	let setState;
	let useStateSpy;
	beforeEach(() => {
		window.alert = jest.fn();
		setState = jest.fn();
		useStateSpy = jest.spyOn(React, 'useState')
	});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it("should render", () => {
		component = shallow(<ForgotPassword />);
		expect(component.find('.page-title').text()).toEqual("Forgot Your Password?");
	});
	it('No form field error', () => {
		const formContext = {
			handleSubmit: jest.fn(),
			watch: jest.fn(),
			register: jest.fn(),
			errors: {}
		};
		jest.spyOn(formHook, "useForm").mockImplementation(() => formContext);

		component = shallow(<ForgotPassword />);

		component
			.find('input[name="email"]')
			.simulate("change", { target: { value: "email" } });
		component
			.find('input[name="newPassword"]')
			.simulate("change", { target: { value: "newPassword" } });
		component
			.find('input[name="repeatPassword"]')
			.simulate("change", { target: { value: "repeatPassword" } });

		expect(component.find('small[data-error="email"]').exists()).toBeFalsy();
		expect(component.find('small[data-error="newPassword"]').exists()).toBeFalsy();
		expect(component.find('small[data-error="repeatPassword"]').exists()).toBeFalsy();
	});
	it('form field error', () => {
		const formContext = {
			handleSubmit: jest.fn(),
			watch: jest.fn(),
			register: jest.fn(),
			errors: {
				email: { type: 'required' },
				newPassword: { type: 'required' },
				repeatPassword: { type: 'required' }
			}
		};
		jest.spyOn(formHook, "useForm").mockImplementation(() => formContext);

		component = shallow(<ForgotPassword />);

		expect(component.find('small[data-error="email"]').exists()).toBeTruthy();
		expect(component.find('small[data-error="newPassword"]').exists()).toBeTruthy();
		expect(component.find('small[data-error="repeatPassword"]').exists()).toBeTruthy();
	});
	it('form field error for password & confirm password', () => {
		const formContext = {
			handleSubmit: jest.fn(),
			watch: jest.fn(),
			register: jest.fn(),
			errors: {
				repeatPassword: { type: 'validate' }
			}
		};
		jest.spyOn(formHook, "useForm").mockImplementation(() => formContext);

		component = shallow(<ForgotPassword />);

		expect(
			component.find('small[data-error="repeatPassword"]').text()
		).toEqual("New & confirm password should be same");
	});
	it('should render reset-success', () => {
		
		useStateSpy.mockImplementation(() => [ true, setState ]);
		
		component = shallow(<ForgotPassword />);
		expect(component.find('.reset-form').exists()).toBeFalsy();
		expect(component.find('.reset-success').exists()).toBeTruthy();
	});
	it('should render reset-form', () => {
		useStateSpy.mockImplementation((init) => [ init, setState ]);
		component = shallow(<ForgotPassword />);
		expect(component.find('.reset-form').exists()).toBeTruthy();
		expect(component.find('.reset-success').exists()).toBeFalsy();
	});
	it('passwordResetOnSubmit should call resetPassword service', () => {
		jest.spyOn(AuthApi, 'resetPassword');
		const callback = jest.fn();
		passwordResetOnSubmit(callback, {});
		expect(AuthApi.resetPassword).toHaveBeenCalledTimes(1);
		expect(AuthApi.resetPassword).toHaveBeenCalledWith({});
	});
	it('should success callback get called', async () => {
		jest.spyOn(AuthApi, 'resetPassword').mockImplementationOnce(
			() => Promise.resolve({ data: {} })
		);
		const callback = jest.fn();

		passwordResetOnSubmit(callback, {});

		await flushPromises();
		expect(callback).toHaveBeenCalledTimes(1);
		expect(window.alert).toHaveBeenCalledTimes(1);
		expect(window.alert).toHaveBeenCalledWith("Password reset successfully");
	});
	it('should success callback get called', async () => {
		jest.spyOn(AuthApi, 'resetPassword').mockImplementationOnce(
			() => Promise.reject({ message: "Auth Error" })
		);
		const callback = jest.fn();

		passwordResetOnSubmit(callback, {});

		await flushPromises();
		expect(callback).toHaveBeenCalledTimes(0);
		expect(window.alert).toHaveBeenCalledTimes(1);
		expect(window.alert).toHaveBeenCalledWith("Auth Error");
	});
	describe("validatePassword", () => {
		it("should return true", () => {
			expect(validatePassword("test", "test")).toBeTruthy();
		});
		it("should return false", () => {
			expect(validatePassword("test", "false")).toBeFalsy();
		});
	});
});
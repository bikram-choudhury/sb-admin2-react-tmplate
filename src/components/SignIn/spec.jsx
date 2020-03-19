import { shallow } from "enzyme";
import React from "react";
import * as formHook from "react-hook-form";
import * as AuthContext from "../../contexts/AuthContext";
import * as AuthApi from "../../services/authentication/authentication.api";
import SignIn, { signInFormOnSubmit } from "./SignIn";

describe("SignUp Component", () => {
    const contextValue = { authDispatch: jest.fn() };
    jest
        .spyOn(AuthContext, "useAuthContext")
        .mockImplementation(() => contextValue);

    jest.spyOn(AuthApi, "authenticateUser");

    it("should render", () => {
        const component = shallow(<SignIn />);
        expect(component.find(".container")).toHaveLength(1);
    });

    it("handleSubmit should get call on form submit", () => {
        const formContext = {
            handleSubmit: jest.fn(),
            watch: jest.fn(),
            register: jest.fn(),
            errors: {}
        };
        jest.spyOn(formHook, "useForm")
            .mockImplementation(() => formContext);

        const component = shallow(<SignIn />);

        component
            .find('input[name="username"]')
            .simulate("change", { target: { value: "username" } });
        component
            .find('input[name="password"]')
            .simulate("change", { target: { value: "password" } });
        component.find("button.user-login").simulate("submit");

        expect(
            component.find('input[name="username"]').prop("aria-invalid")
        ).toBeFalsy();
        expect(formContext.handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("signInFormOnSubmit should call authenticateUser", () => {
        const dispatch = jest.fn();
        const expectedData = { username: "username", password: "password" };

        signInFormOnSubmit(dispatch, { ...expectedData });
        expect(AuthApi.authenticateUser).toBeCalledTimes(1);
        expect(AuthApi.authenticateUser).toHaveBeenCalledWith(
            expectedData,
            dispatch
        );
    });

    describe("Errors handling", () => {
        it("should show error", () => {
            const formContext = {
                handleSubmit: jest.fn(),
                watch: jest.fn(),
                register: jest.fn(),
                errors: {
                    username: { type: "required" },
                    password: { type: "required" }
                }
            };
            jest.spyOn(formHook, "useForm")
                .mockImplementation(() => formContext);

            const component = shallow(<SignIn />);
            component.find("button.user-login").simulate("submit");

            expect(
                component.find('input[name="username"]')
                    .prop("aria-invalid")
            ).toBeTruthy();
            expect(
                component.find('input[name="password"]')
                    .prop("aria-invalid")
            ).toBeTruthy();
        });
    });
});

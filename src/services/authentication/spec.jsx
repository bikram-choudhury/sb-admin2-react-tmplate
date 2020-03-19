import mockAxios from "axios";
import { setAuthToken } from "../../actions/auth/auth.action";
import { AUTH_SERVER_URL } from "./../../../settings";
import {
	authenticateUser,
	submitPostRequest,
	saveUsers
} from "./authentication.api";
import { flushPromises } from "../../../jest.helper";

describe("Authentication API", () => {
	it("saveUsers", () => {
		const user = { x: "test" };
		const dispatch = jest.fn();
		const url = `${AUTH_SERVER_URL}/auth/register`;
		saveUsers(user, dispatch);

		expect(mockAxios.post).toHaveBeenCalledTimes(1);
		expect(mockAxios.post).toHaveBeenCalledWith(url, user);
	});
	it("authenticateUser", () => {
		const user = { x: "test" };
		const dispatch = jest.fn();
		const url = `${AUTH_SERVER_URL}/auth/login`;
		authenticateUser(user, dispatch);

		expect(mockAxios.post).toHaveBeenCalledTimes(1);
		expect(mockAxios.post).toHaveBeenCalledWith(url, user);
	});
	it("submitPostRequest", async () => {
		const user = { x: "test" };
		const dispatch = jest.fn();
		const response = {
			data: {
				accessToken: "access_token",
				refreshToken: "",
				tokenType: ""
			}
		};
		const expectedToken = {
			accessToken: "access_token",
			refreshToken: "",
			tokenType: ""
		};
		mockAxios.post.mockImplementationOnce(() => Promise.resolve(response));
		const url = `${AUTH_SERVER_URL}/auth/register`;
		submitPostRequest(url, user, dispatch);

		expect(mockAxios.post).toHaveBeenCalledTimes(1);
		expect(mockAxios.post).toHaveBeenCalledWith(url, user);

		await flushPromises(); // available from jest.helper.js

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith(setAuthToken(expectedToken));
	});

	describe("Handle Error", () => {
		const consoleSpy = jest.spyOn(console, "error").mockImplementation();
		const message = "Network Error";
		afterAll(() => {
			consoleSpy.mockRestore();
		});
		it("fetches error but doesn't console it", async () => {
			mockAxios.post.mockImplementationOnce(() => Promise.reject(message));
			const user = { x: "test" };
			const dispatch = jest.fn();

			submitPostRequest("auth/register", user, dispatch);
			expect(consoleSpy).not.toBeCalled();
		});
		it("fetches error and console it", async () => {
			mockAxios.post.mockImplementationOnce(() =>
				Promise.reject({ response: { data: { message } } })
			);

			const user = { x: "test" };
			const dispatch = jest.fn();

			submitPostRequest("auth/register", user, dispatch);

			await flushPromises();
			expect(consoleSpy).toBeCalledWith(message);
		});
	});
});

import Axios from "axios";
import { AUTH_SERVER_URL } from "./../../../settings";
import { setAuthToken } from "../../actions/auth/auth.action";

export const submitPostRequest = (URL, user, dispatch) => {
	Axios.post(URL, user)
		.then(response => {
			const { data } = response;
			const token = {
				accessToken: data.accessToken,
				refreshToken: data.refreshToken,
				tokenType: data.tokenType
			};
			return token;
		})
		.then(token => dispatch(setAuthToken(token)))
		.catch(error => {
			if (error.response) {
				console.error(error.response.data.message);
			}
		});
};

export const saveUsers = (user, dispatch) => {
	const URL = `${AUTH_SERVER_URL}/auth/register`;
	submitPostRequest(URL, user, dispatch);
};

export const authenticateUser = (user, dispatch) => {
	const URL = `${AUTH_SERVER_URL}/auth/login`;
	submitPostRequest(URL, user, dispatch);
};

export const resetPassword = (resetInfo) => {
	const URL = `${AUTH_SERVER_URL}/auth/reset-password`;
	return new Promise((resolve, reject) => {
		Axios.post(URL, resetInfo)
		.then(_ => {
			resolve(true);
		}).catch(error => {
			reject(error);
		})
	});
}

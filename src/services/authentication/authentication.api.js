import Axios from "axios";
import { AUTH_SERVER_URL } from "./../../../settings";
import { setAuthToken } from "../../actions/auth/auth.action";

export const submitPostRequest = (URL, user, dispatch) => {
	Axios.post(URL, user)
		.then(response => {
			const { data } = response;
			const token = {
				accessToken: data.access_token,
				refreshToken: data.refresh_token,
				tokenType: data.token_type
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

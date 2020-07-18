import { SET_AUTH } from "../../action.constants";

export const setAuthInfo = user => ({
	type: SET_AUTH,
	payload: { ...user }
});

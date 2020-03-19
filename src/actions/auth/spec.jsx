import { setAuthToken } from "./auth.action";
import { SET_AUTH } from "../../action.constants";

describe("Testing Auth actions", () => {
	it("setAuthToken", () => {
		const expectedAuth = { token: "test" };
		const action = setAuthToken(expectedAuth);
		expect(action).toEqual({
			type: SET_AUTH,
			payload: { ...expectedAuth }
		});
	});
});

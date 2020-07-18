import { setAuthInfo } from "./auth.action";
import { SET_AUTH } from "../../action.constants";

describe("Testing Auth actions", () => {
	it("setAuthInfo", () => {
		const expectedAuth = { token: "test" };
		const action = setAuthInfo(expectedAuth);
		expect(action).toEqual({
			type: SET_AUTH,
			payload: { ...expectedAuth }
		});
	});
});

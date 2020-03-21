import { AuthReducer } from "./auth.reducer";
import { SET_AUTH } from "../../action.constants";

describe('AuthReducer', () => {
    const initialState = { x: 1 };
    it('should return initial state', () => {
        const action = { type: 'test' };
        const result = AuthReducer(initialState, action);

        expect(result).toEqual(initialState);
    });
    it('should return modified state', () => {
        const payload = { y: 1 };
        const action = { type: SET_AUTH, payload };
        const result = AuthReducer(initialState, action);

        expect(result).toEqual({ ...initialState, ...payload });
    });
})
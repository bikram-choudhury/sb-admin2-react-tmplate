import { SET_AUTH } from "../../action.constants";

export const setAuthToken = (auth) => ({
    type: SET_AUTH,
    payload: { ...auth }
})
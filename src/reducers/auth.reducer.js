import { SET_AUTH } from '../action.constants';

export const AuthReducer = (state, { type, payload }) => {
    switch (type) {
        case SET_AUTH:
            return { ...state, ...payload }
        default:
            return state;
    }
}
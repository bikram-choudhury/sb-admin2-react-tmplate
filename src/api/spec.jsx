import mockAxios from 'axios';
import { AUTH_SERVER_URL } from './../../settings';
import { saveUsers } from './authentication.api';
import { setAuthToken } from '../actions/auth/auth.action';

describe('Authentication API', () => {
    it('saveUsers', async () => {

        const user = { x: 'test' }
        const dispatch = jest.fn();
        const response = {
            data: {
                access_token: 'access_token',
                refresh_token: '',
                token_type: ''
            }
        };
        const expectedToken = {
            accessToken: 'access_token',
            refreshToken: '',
            tokenType: ''
        };
        mockAxios.post.mockImplementationOnce(() => Promise.resolve(response));
        saveUsers(user, dispatch);

        const url = `${AUTH_SERVER_URL}/auth/register`;
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith(url, user);

        await flushPromises(); // available from jest.helper.js

        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith(setAuthToken(expectedToken));

    });

    describe('Handle Error', () => {
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
        const message = 'Network Error';
        afterAll(() => {
            consoleSpy.mockRestore();
        })
        it('fetches error but doesn\'t console it', async () => {

            mockAxios.post.mockImplementationOnce(
                () => Promise.reject(message)
            );
            const user = { x: 'test' }
            const dispatch = jest.fn();

            saveUsers(user, dispatch);
            expect(consoleSpy).not.toBeCalled();
        });
        it('fetches error and console it', async () => {

            mockAxios.post.mockImplementationOnce(
                () => Promise.reject({ response: { data: { message } } })
            );

            const user = { x: 'test' }
            const dispatch = jest.fn();

            saveUsers(user, dispatch);

            await flushPromises();
            expect(consoleSpy).toBeCalledWith(message);
        })

    });
})
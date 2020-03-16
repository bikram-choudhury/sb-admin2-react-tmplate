import checkPropTypes from 'check-prop-types';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Admin } from './layout/Admin/Admin';
import { Authentication } from './layout/Authentication/Authentication';

describe('Testing App', () => {

    it('should render', () => {
        const component = shallow(<App />);
        expect(component).toBeTruthy();
        component.unmount();
    });

    describe('check App prop-types', () => {
        it('should not throw error', () => {
            const props = { accessToken: 'test' };
            const result = checkPropTypes(App.propTypes, props, 'props', App.name);
            expect(result).toBeUndefined();
        });
        it('should throw error', () => {
            const props = {};
            const result = checkPropTypes(App.propTypes, props, 'props', App.name);
            expect(result).toBeDefined();
        });
    })
    describe('onAuthFail', () => {
        it('should return location object', () => {
            const component = shallow(<App />);
            const instance = component.instance();
            const location = '/hello';
            const expectedValue = { pathname: '/sign-in', state: { from: location } };
            const result = instance.onAuthFail(location);
            expect(result).toEqual(expectedValue);
            component.unmount();
        })
    });
    describe('renderAuthRoutes', () => {
        it('should return Authentication - component', () => {
            const component = shallow(<App />);
            const instance = component.instance();
            const result = instance.renderAuthRoutes();

            expect(result).toEqual(<Authentication />);
            component.unmount();
        });
        it('should return Redirect - component', () => {
            const component = shallow(<App accessToken="test" />);
            const instance = component.instance();
            const result = instance.renderAuthRoutes();

            expect(result.props.to).toEqual('/');
            component.unmount();
        });
    });
    describe('renderAdminRoute', () => {
        it('should return Admin - component', () => {
            const component = shallow(<App accessToken="test" />);
            const instance = component.instance();
            const result = instance.renderAdminRoute({ location: '/home' });

            expect(result).toEqual(<Admin />);
            component.unmount();
        });
        it('should return Redirect - component', () => {
            const component = shallow(<App />);
            const instance = component.instance();
            const result = instance.renderAdminRoute({ location: '/home' });

            expect(result.props.to.pathname).toEqual('/sign-in');
            component.unmount();
        });
    });
    describe('Admin - layout', () => {

        it('should render ', () => {
            const component = mount(
                <MemoryRouter initialEntries={['/']}>
                    <App accessToken="IamToken" />
                </MemoryRouter>
            );
            expect(component.find('Admin')).toHaveLength(1);
            component.unmount();
        });
        it('should redirect to "/sign-in" route', () => {
            const component = mount(
                <MemoryRouter initialEntries={['/']}>
                    <App />
                </MemoryRouter>
            );
            expect(location.pathname).toBe('/sign-in');
            expect(component.find('Authentication')).toHaveLength(1);
            component.unmount();
        });

    });
    describe('Authentication - layout', () => {

        describe('Route: sign-in', () => {

            it('should render ', () => {
                const component = mount(
                    <MemoryRouter initialEntries={['/sign-in']}>
                        <App accessToken="" />
                    </MemoryRouter>
                );
                expect(component.find('Authentication')).toHaveLength(1);
                component.unmount();
            });
            it('should redirect to "/" route', () => {
                const component = mount(
                    <MemoryRouter initialEntries={['/sign-in']}>
                        <App accessToken="IamToken" />
                    </MemoryRouter>
                );
                expect(location.pathname).toBe('/');
                expect(component.find('Admin')).toHaveLength(1);
                component.unmount();
            });

        });
        describe('Route: sign-up', () => {

            it('should render ', () => {
                const component = mount(
                    <MemoryRouter initialEntries={['/sign-up']}>
                        <App />
                    </MemoryRouter>
                );
                expect(component.find('Authentication')).toHaveLength(1);
                component.unmount();
            });
            it('should redirect to "/" route', () => {
                const component = mount(
                    <MemoryRouter initialEntries={['/sign-up']}>
                        <App accessToken="IamToken" />
                    </MemoryRouter>
                );
                expect(location.pathname).toBe('/');
                expect(component.find('Admin')).toHaveLength(1);
                component.unmount();
            });

        });

    });

})
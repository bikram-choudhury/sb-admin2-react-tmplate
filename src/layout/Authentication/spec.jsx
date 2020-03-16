/*
Unit tests are really about testing what is specific to that component. 
In this case you only need to test that you have properly configured the Route elements. 
Any child components have their own tests, and Switch and Route should be tested in the library they are from.

https://stackoverflow.com/a/51586418
*/
import React from 'react';
import { shallow } from "enzyme";
import { Authentication } from "./Authentication";
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

describe('Authentication', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Authentication />);
    })
    it('should render', () => {
        expect(component.find('#wrapper')).toHaveLength(1);
    });

    it('should render "SignIn"', () => {
        const routeEl = component.find('Route[path="/sign-in"]');
        expect(routeEl.first().prop('component')).toBe(SignIn);
    });

    it('should render "SignUp"', () => {
        const routeEl = component.find('Route[path="/sign-up"]');
        expect(routeEl.first().prop('component')).toBe(SignUp);
    });
})
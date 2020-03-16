import React from 'react';
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Authentication } from "./Authentication";

describe('Authentication', () => {
    it('should render', () => {
        const component = shallow(<Authentication />);
        expect(component.find('#wrapper')).toHaveLength(1);
    });

    it('should render "SignIn"', () => {
        const component = mount(
            <MemoryRouter initialEntries={['/sign-in']} initialIndex={0}>
                <Authentication  />
            </MemoryRouter>
        );        
        expect(component.find('SignIn')).toHaveLength(1);
    });

    it('should render "SignUp"', () => {
        const component = mount(
            <MemoryRouter initialEntries={['/sign-up']}>
                <Authentication  />
            </MemoryRouter>
        );
        expect(component.find('SignUp')).toHaveLength(1);
    });
})
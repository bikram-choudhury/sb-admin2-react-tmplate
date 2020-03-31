import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {
    let component;
    beforeEach(() => {
        component = shallow(<NavBar />);
    })
    it('should render', () => {
        expect(component.find('nav.navbar')).toBeTruthy();
    });
    it('should enable no-arrow dropdown', () => {
        const element = component.find('li.nav-item.dropdown.no-arrow');
        expect(element.at(3).hasClass('show')).toBeFalsy();

        const toggleEl = component.find('span.nav-link.dropdown-toggle');
        expect(toggleEl.prop('aria-expanded')).toBeFalsy();

        const dropdownEl = component.find('div.dropdown-menu[aria-labelledby="userDropdown"]');
        expect(dropdownEl.hasClass('show')).toBeFalsy();
    });
    it('should enable no-arrow dropdown', () => {
        component.find('span.nav-link.dropdown-toggle').simulate('click');

        const element = component.find('li.nav-item.dropdown.no-arrow');
        expect(element.at(3).hasClass('show')).toBeTruthy();

        const toggleEl = component.find('span.nav-link.dropdown-toggle');
        expect(toggleEl.prop('aria-expanded')).toBeTruthy();

        const dropdownEl = component.find('div.dropdown-menu[aria-labelledby="userDropdown"]');
        expect(dropdownEl.hasClass('show')).toBeTruthy();
    });
});
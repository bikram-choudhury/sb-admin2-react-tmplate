import { shallow } from 'enzyme';
import React from 'react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
    const DropdownData = [{
        id: 1,
        name: 'Action',
        divider: false
    }, {
        id: 2,
        name: 'Another action',
        divider: true
    }];

    describe('Dropdown type', () => {
        it('type: link', () => {
            const selectedSpy = jest.fn();
            const component = shallow(
                <Dropdown
                    items={DropdownData}
                    type="link"
                    className=""
                    name="Dropdown"
                    animatedClassName=""
                    selected={selectedSpy}
                />
            );
            expect(component.find('span.dropdown-toggle').exists()).toBeTruthy();
            expect(component.find('button.dropdown-toggle').exists()).toBeFalsy();
        });
        it('type: button', () => {
            const selectedSpy = jest.fn();

            const component = shallow(
                <Dropdown
                    items={DropdownData}
                    type="button"
                    className=""
                    name="Dropdown"
                    animatedClassName=""
                    selected={selectedSpy}
                />
            );
            expect(component.find('span.dropdown-toggle').exists()).toBeFalsy();
            expect(component.find('button.dropdown-toggle').exists()).toBeTruthy();
        });
        it('type: text', () => {
            const selectedSpy = jest.fn();

            const component = shallow(
                <Dropdown
                    items={DropdownData}
                    type="text"
                    className=""
                    name="Dropdown"
                    animatedClassName=""
                    selected={selectedSpy}
                />
            );

            expect(component.isEmptyRender).toBeTruthy();
        });
    });

    it('dropdown menu visibility', () => {
        const selectedSpy = jest.fn();
        const component = shallow(
            <Dropdown
                items={DropdownData}
                type="link"
                className=""
                name="Dropdown"
                animatedClassName=""
                selected={selectedSpy}
            />
        );

        expect(component.find('span.dropdown-toggle').exists()).toBeTruthy();
        expect(component.find('div.dropdown-menu.show').exists()).toBeFalsy();
        component.find('span.dropdown-toggle').simulate('click');
        expect(component.find('div.dropdown-menu.show').exists()).toBeTruthy();

    });
    describe('divider visibility', () => {
        it('show menu divider', () => {
            const selectedSpy = jest.fn();
            const menu = [{
                id: 2,
                name: 'Another action',
                divider: true
            }];
            const component = shallow(
                <Dropdown
                    items={menu}
                    type="link"
                    className=""
                    name="Dropdown"
                    animatedClassName=""
                    selected={selectedSpy}
                />
            );
            expect(component.find('.dropdown-divider').exists()).toBeTruthy();
        });
        it('hide menu divider', () => {
            const selectedSpy = jest.fn();
            const menu = [{
                id: 2,
                name: 'Another action',
                divider: false
            }];
            const component = shallow(
                <Dropdown
                    items={menu}
                    type="link"
                    className=""
                    name="Dropdown"
                    animatedClassName=""
                    selected={selectedSpy}
                />
            );
            expect(component.find('.dropdown-divider').exists()).toBeFalsy();
        });
    });
});
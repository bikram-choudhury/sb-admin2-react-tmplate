import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {

    it('should render', () => {
        const props = {
            heading: "Default Card Example",
            headerClass: '',
            parentClass: '',
            type: 'default',
            toggle: false,
            dropdown: false
        }
        const component = shallow(
            <Card {...props}>
                <div>
                    This card uses Bootstrap&rsquo;s default styling
                    with no utility classes added. Global styles are the
                    only things modifying the look and feel of this
                    default card example.
            </div>
            </Card>
        );
        expect(component.find('.card').exists()).toBeTruthy();
        expect(component.find('.card-header').prop('data-toggle')).toBeFalsy();
        expect(component.find('h6')).toHaveClassName('text-default');
        expect(component.find('h6').text()).toEqual('Default Card Example');
        expect(component.find('.dropdown').exists()).toBeFalsy();
        expect(component.find('.card-body.collapse').exists()).toBeFalsy();
    });

    it('should render toggle', () => {
        const props = {
            heading: "Default Card Example",
            headerClass: '',
            parentClass: '',
            type: 'default',
            toggle: true,
            dropdown: false
        }
        const component = shallow(
            <Card {...props}>
                <div>
                    This card uses Bootstrap&rsquo;s default styling
                    with no utility classes added. Global styles are the
                    only things modifying the look and feel of this
                    default card example.
                </div>
            </Card>
        );
        expect(component.find('.card').exists()).toBeTruthy();
        expect(component.find('.card-header')).not.toHaveClassName('collapsed');
        expect(component.find('.card-header').prop('data-toggle')).toEqual('collapse');
        expect(component.find('.card-body.collapse').exists()).toBeTruthy();
        expect(component.find('.card-body.collapse.show').exists()).toBeTruthy();

        component.find('.card-header[data-toggle="collapse"]').simulate('click');

        expect(component.find('.card-header')).toHaveClassName('collapsed');
        expect(component.find('.card-body.collapse.show').exists()).toBeFalsy();
    });

    it('should render dropdown', () => {
        const props = {
            heading: "Default Card Example",
            headerClass: '',
            parentClass: '',
            type: 'default',
            toggle: false,
            dropdown: true
        }
        const component = shallow(
            <Card {...props}>
                <div>
                    This card uses Bootstrap&rsquo;s default styling
                    with no utility classes added. Global styles are the
                    only things modifying the look and feel of this
                    default card example.
                </div>
            </Card>
        );
        expect(component.find('.dropdown').exists()).toBeTruthy();
        expect(component.find('.dropdown-toggle').prop('aria-expanded')).toBeFalsy();
        expect(component.find('.dropdown.show').exists()).toBeFalsy();
        expect(component.find('.dropdown-menu.show').exists()).toBeFalsy();

        component.find('.dropdown.no-arrow').simulate('click');

        expect(component.find('.dropdown.show').exists()).toBeTruthy();
        expect(component.find('.dropdown-toggle').prop('aria-expanded')).toBeTruthy();
        expect(component.find('.dropdown-menu.show').exists()).toBeTruthy();
    });

    it('should call the toggle state callback', () => {
        const props = {
            heading: "Default Card Example",
            headerClass: '',
            parentClass: '',
            type: 'default',
            toggle: false,
            dropdown: false
        }
        const useStateSpy = jest.spyOn(React, 'useState');
        const setState = jest.fn();
        useStateSpy.mockImplementation(() => [ true, setState ]);

        const component = shallow(
            <Card {...props}>
                <div>
                    This card uses Bootstrap&rsquo;s default styling
                    with no utility classes added. Global styles are the
                    only things modifying the look and feel of this
                    default card example.
                </div>
            </Card>
        );
        component.find('.card-header').simulate('click');

        expect(setState).not.toBeCalled();
    });
})
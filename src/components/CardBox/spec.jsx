import React from 'react';
import { shallow } from 'enzyme';
import CardBox from './CardBox';

describe('CardBox', () => {
    it('should render progress-bar', () => {
        const props = {
            type: 'type',
            heading: 'heading',
            progress: 70,
            title: 'title',
            icon: 'class'
        };
        const component = shallow(<CardBox {...props} />)
        expect(component.find('.text-xs').text()).toEqual(props.heading);
        expect(component.find('.text-xs').hasClass(`text-${props.type}`)).toBeTruthy();
        expect(component.find('.card-body .progress').exists()).toBeTruthy();
        expect(component.find('.card-body .class').exists()).toBeTruthy();
    });
    it('should render title', () => {
        const props = {
            type: 'type',
            heading: 'heading',
            title: 'title',
            icon: 'class'
        };
        const component = shallow(<CardBox {...props} />)
        expect(component.find('.text-xs').text()).toEqual(props.heading);
        expect(component.find('.text-xs').hasClass(`text-${props.type}`)).toBeTruthy();
        expect(component.find('.card-body .progress').exists()).toBeFalsy();
        expect(component.find('.card-body .class').exists()).toBeTruthy();
    });
});
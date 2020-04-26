import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';
import { CircleButtons, BrandButtons, SplitButtons } from './_buttons';

describe('Buttons', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Buttons />)
    });
    it('should render', () => {
        expect(component.find('h1').text()).toEqual('Buttons');
    });
    it('circle buttons should present', () => {
        expect(component.find('.btn-circle')).toHaveLength(CircleButtons.list.length * 3);
    });
    it('block buttons should present', () => {
        expect(component.find('.btn-block')).toHaveLength(BrandButtons.list.length);
    });
    it('split buttons should present', () => {
        expect(component.find('.btn-icon-split')).toHaveLength(SplitButtons.list.length);
    });
})
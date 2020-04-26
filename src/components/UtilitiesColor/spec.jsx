import React from 'react';
import { shallow } from 'enzyme';
import UtilitiesColor from './UtilitiesColor';
import { TextColor, GradientColor, GrayscaleBackground } from './_colors';

describe('UtilitiesColor', () => {
    it('should render', () => {
        const component = shallow(<UtilitiesColor />);

        expect(component.find('h1').text()).toEqual('Color Utilities');
        expect(component.find('.card')).toHaveLength(4);

        expect(component.find('.card').at(0).find('p')).toHaveLength(TextColor.list.length);
        expect(component.find('.card').at(1).find('p')).toHaveLength(2);
        expect(component.find('.card').at(2).find('.card-body .text-white'))
            .toHaveLength(GradientColor.list.length);
        expect(component.find('.card').at(3).find('p'))
            .toHaveLength(GrayscaleBackground.list.length);
    });
})
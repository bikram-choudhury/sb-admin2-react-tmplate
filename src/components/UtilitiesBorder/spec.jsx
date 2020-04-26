import React from 'react';
import { shallow } from 'enzyme';
import UtilitiesBorder from './UtilitiesBorder';
import { BorderUtilitiesTypes } from './_border';

describe('UtilitiesBorder', () => {
    it('should render', () => {
        const component = shallow(<UtilitiesBorder />);

        expect(component.find('h1').text()).toEqual('Border Utilities');
        expect(component.find('.border-left-utilities .card'))
            .toHaveLength(BorderUtilitiesTypes.length);
        expect(component.find('.border-bottom-utilities .card'))
            .toHaveLength(BorderUtilitiesTypes.length);
    });
})
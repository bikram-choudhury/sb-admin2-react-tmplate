import React from 'react';
import { shallow } from 'enzyme';
import Cards from './Cards';
import { CardBox, CardWithContent } from './_card';

describe('Cards', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Cards />);
    });
    it('should render', () => {
        expect(component.find('h1').text()).toEqual('Cards');
        expect(component.find('Card')).toHaveLength(CardWithContent.length);
        expect(component.find('.card')).toHaveLength(CardBox.length);
        expect(component.find('.progress')).toHaveLength(1);
    });
});
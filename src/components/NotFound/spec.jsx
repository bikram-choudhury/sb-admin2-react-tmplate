import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

describe('NotFound', () => {
    it('should render', () => {
        const component = shallow(<NotFound />);
        expect(component.find('.error').prop('data-text')).toEqual('404');
    });
});
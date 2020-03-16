import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './SignUp';

describe('SignUp Component', () => {
    it('should render', () => {
        const component = shallow(<SignUp />);
        expect(component.find('.container')).toIncludeText('Create an Account');
    });
})
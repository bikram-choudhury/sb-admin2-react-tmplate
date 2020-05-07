import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';
import { EmployeeDatabase } from './_employee';

describe('Tables', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Tables />);
    })
    it('should render', () => {
        expect(component.find('#dataTable thead tr th')).toHaveLength(6);
        expect(component.find('#dataTable tbody tr'))
            .toHaveLength(EmployeeDatabase.length);
    });
});
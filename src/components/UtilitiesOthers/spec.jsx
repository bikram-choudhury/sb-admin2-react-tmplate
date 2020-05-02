import React from 'react';
import { shallow } from 'enzyme';
import UtilitiesOthers from './UtilitiesOthers';

describe('UtilitiesOthers', () => {
    it('should render', () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();

        const components = shallow(<UtilitiesOthers />);
        expect(components.find('h1').text()).toEqual('Other Utilities');
        expect(components.find('ProgressBar')).toHaveLength(2);
        expect(components.find('RotationCard')).toHaveLength(2);
        expect(components.find('Dropdown').prop('noArrow')).toBeTruthy();

        const selectedFun = components.find('Dropdown').prop('selected');
        selectedFun({ id: 1 });
        expect(consoleSpy).toBeCalledTimes(1);
        expect(consoleSpy).toBeCalledWith({ id: 1 });        
    });
});
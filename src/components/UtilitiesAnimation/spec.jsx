import React from 'react';
import { shallow } from 'enzyme';
import UtilitiesAnimation from './UtilitiesAnimation';

describe('UtilitiesAnimation', () => {
    it('should render', () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation();
        const component = shallow(<UtilitiesAnimation />);
        const nodeList = component.find('Dropdown');
        expect(nodeList).toHaveLength(3);
        expect(nodeList.at(0).prop('items')).toHaveLength(3);
        expect(nodeList.at(0).prop('type')).toEqual('link');
        expect(nodeList.at(2).prop('type')).toEqual('button');

        const selectedFun = nodeList.at(0).prop('selected');
        selectedFun({ id: 1 });
        
        expect(consoleSpy).toBeCalledTimes(1);
        expect(consoleSpy).toBeCalledWith({ id: 1 });
    });
});
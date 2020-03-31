import React from 'react';
import { shallow } from 'enzyme';
import SideBarMenu from './SideBarMenu';

describe('SideBarMenu', () => {
    
    it('should render heading', () => {
        const component = shallow(
            <SideBarMenu heading={'Test'} routes={[]} />
        );
        expect(component.find('.sidebar-heading').exists()).toBeTruthy();
    });
    it('should not render heading', () => {
        const component = shallow(
            <SideBarMenu heading={''} routes={[]} />
        );
        expect(component.find('.sidebar-heading').exists()).toBeFalsy();
    });
    it('should render divider', () => {
        const component = shallow(
            <SideBarMenu divider={true} routes={[]} />
        );
        expect(component.find('.sidebar-divider').exists()).toBeTruthy();
    });
    it('should not render divider', () => {
        const component = shallow(
            <SideBarMenu routes={[]} />
        );
        expect(component.find('.sidebar-divider').exists()).toBeFalsy();
    });
    it('should iterate ListItem for 2 times', () => {
        const routes = [{ name: 'test-1' }, { name: 'test-2' }];
        const component = shallow(
            <SideBarMenu heading={''} routes={routes} />
        );
        expect(component.find('ListItem')).toHaveLength(routes.length);
    });
})
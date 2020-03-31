import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

describe('ListItem', () => {
    it('should render', () => {
        const component = shallow(<ListItem path={"/test"} />);
        expect(component.find(".nav-item.active").exists()).toBeFalsy();
        expect(component.find(".nav-item").exists()).toBeTruthy();
    });
    it('should render as active list', () => {
        const component = shallow(<ListItem baseRoute={"/"} path={"/"} />);
        expect(component.find("li.nav-item.active").exists()).toBeTruthy();
    });
    it('should render nav-link without subroutes', () => {
        const component = shallow(
            <ListItem icon={"fa-alt"} path={"/"} name={'name'} subRoutes={null} />
        );
        const element = component.find("NavLink[to='/']");
        expect(element.first().prop("to")).toBe('/');
        expect(element.find("i.fa-alt").exists()).toBeTruthy();
    });
    describe('should render menu list with subroutes', () => {
        const subRoutes = [{
            path: '/buttons',
            name: 'Buttons'
        }];
        it('same path & baseRoute ', () => {
            const component = shallow(
                <ListItem
                    name={'name'}
                    path={"/"}
                    baseRoute={"/"}
                    subRoutes={subRoutes}
                />
            );
            const element = component.find("span.nav-link");
            expect(element.hasClass('collapsed')).toBeFalsy();

            const collapsedEl = component.find("div.collapse");
            expect(collapsedEl.hasClass('show')).toBeTruthy();
        });
        it('different path & baseRoute ', () => {
            const component = shallow(
                <ListItem
                    name={'name'}
                    path={"/"}
                    baseRoute={"/component"}
                    subRoutes={subRoutes}
                />
            );
            const element = component.find("span.nav-link");
            expect(element.hasClass('collapsed')).toBeTruthy();

            const collapsedEl = component.find("div.collapse");
            expect(collapsedEl.hasClass('show')).toBeFalsy();
        });

        describe('should update base route', () => {
            it('empty baseRoute with path value', () => {
                const callback = jest.fn();

                const component = shallow(
                    <ListItem
                        name={'name'}
                        path={"/component"}
                        baseRoute={""}
                        subRoutes={subRoutes}
                        setBaseRoute={callback}
                    />
                );
                component.find('span.nav-link[data-toggle="collapse"]').simulate('click');
                expect(callback).toBeCalledTimes(1);
                expect(callback).toBeCalledWith('/component');
            });
            it('baseRoute with same path value', () => {
                const callback = jest.fn();

                const component = shallow(
                    <ListItem
                        name={'name'}
                        path={"/component"}
                        baseRoute={"/component"}
                        subRoutes={subRoutes}
                        setBaseRoute={callback}
                    />
                );
                component.find('span.nav-link[data-toggle="collapse"]').simulate('click');
                expect(callback).toBeCalledTimes(1);
                expect(callback).toBeCalledWith('');
            });
            it('baseRoute with diff path value', () => {
                const callback = jest.fn();

                const component = shallow(
                    <ListItem
                        name={'name'}
                        path={"/component"}
                        baseRoute={"/utilities"}
                        subRoutes={subRoutes}
                        setBaseRoute={callback}
                    />
                );
                component.find('span.nav-link[data-toggle="collapse"]').simulate('click');
                expect(callback).toBeCalledTimes(1);
                expect(callback).toBeCalledWith('/component');
            });
        });
        
        describe('subRoutes should generate multiple links', () => {
            it('should have `collapse-item`', () => {
                const routes = [{
                    path: '/buttons',
                    name: 'Buttons'
                }];

                const component = shallow(
                    <ListItem
                        name={'name'}
                        path={"/components"}
                        baseRoute={"/"}
                        subRoutes={routes}
                    />
                );
                const element = component.find('NavLink.collapse-item');
                expect(element.first().prop("to")).toBe("/components/buttons");

                const dividerEl = component.find("div.collapse-inner .collapse-divider");
                expect(dividerEl.exists()).toBeFalsy()
            });
            it('should have `collapse-divider`', () => {
                const routes = [{
                    path: '/buttons',
                    name: 'Buttons',
                    divider: true
                }];

                const component = shallow(
                    <ListItem
                        name={'name'}
                        path={"/components"}
                        baseRoute={"/"}
                        subRoutes={routes}
                    />
                );
                const element = component.find('NavLink.collapse-item');
                expect(element.first().prop("to")).toBe("/components/buttons");

                const dividerEl = component.find("div.collapse-inner .collapse-divider");
                expect(dividerEl.exists()).toBeTruthy();

                const headerEl = component.find("div.collapse-inner h6.collapse-header");
                expect(headerEl.at(1).exists()).toBeFalsy();
            });
            it('should have `collapse-header`', () => {
                const routes = [{
                    path: '/buttons',
                    name: 'Buttons',
                    heading: 'Heading'
                }];

                const component = shallow(
                    <ListItem
                        name={'name'}
                        path={"/components"}
                        baseRoute={"/"}
                        subRoutes={routes}
                    />
                );

                const headerEl = component.find("div.collapse-inner h6.collapse-header");
                expect(headerEl.at(1).exists()).toBeTruthy();
            });
        });

    });
});
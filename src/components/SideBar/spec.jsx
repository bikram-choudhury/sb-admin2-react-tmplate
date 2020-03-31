import React from "react";
import { shallow } from "enzyme";
import SideBar from "./SideBar";
import RouteConfig from '../../route';

jest.mock('react-router-dom', () => {
    return {
        ...jest.requireActual('react-router-dom'),
        useLocation: () => ({
            pathname: "/example/path"
        })
    };
});

describe("SideBar", () => {
    let useStateSpy;
    let setState;
    beforeEach(() => {
        setState = jest.fn();
        useStateSpy = jest.spyOn(React, 'useState');
    });
    afterAll(() => {
        jest.resetAllMocks();
    });
    it("should render", () => {
        const component = shallow(<SideBar />);
        expect(component.find("ul#accordionSidebar")).toBeTruthy();
    });
    it("should not have toggled class", () => {
        useStateSpy.mockImplementationOnce(init => [ init, setState ]);
        const component = shallow(<SideBar />);
        expect(component.find("ul.toggled").exists()).toBeFalsy();
    });
    it("should have toggled class", () => {
        useStateSpy.mockImplementationOnce(() => [ true, setState ]);
        const component = shallow(<SideBar />);
        expect(component.find("ul.toggled")).toBeTruthy();
    });
    it("SideBarMenu should iterate through the available routes", () => {
        useStateSpy.mockImplementationOnce(init => [ init, setState ]);
        const component = shallow(<SideBar />);
        expect(component.find("SideBarMenu")).toHaveLength(RouteConfig.length);
    });
    it("should update toggled status", () => {
        useStateSpy.mockImplementationOnce(init => [ init, setState ]);
        const component = shallow(<SideBar />);
        component.find("#sidebarToggle").simulate('click');
        expect(setState).toHaveBeenCalledWith(true);
    });
});
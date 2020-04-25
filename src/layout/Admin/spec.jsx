import React from "react";
import { shallow } from "enzyme";
import Admin, { createAdminRoutes } from "./Admin";

const TestComponent = () => (<div>Test component</div>);

describe("Admin", () => {
	let component;
	beforeEach(() => {
		component = shallow(<Admin />);
	});
	it("should render", () => {
		expect(component.find("div")).toBeTruthy();
		expect(component.find("SideBar")).toBeTruthy();
		expect(component.find("NavBar")).toBeTruthy();
		expect(component.find(".container-fluid")).toBeTruthy();
		expect(component.find("LoggedInFooter")).toBeTruthy();
	});
	describe('should create routes', () => {
		it('should not have sub routes', () => {
			const name = 'Dashboard';
			const RouterList = [{
				routes: [{
					path: '/',
					name: name,
					component: TestComponent
				}]
			}];
			const routerElemets = createAdminRoutes(RouterList);
			const routeEl = routerElemets[ 0 ];

			expect(routerElemets).toHaveLength(1);
			expect(routeEl.key).toEqual(name);
		});
		it('should not have sub routes', () => {

			const RouterList = [{
				routes: [{
					path: '/test',
					name: 'Dashboard',
					subRoutes: [{
						path: '/buttons',
						name: 'Buttons',
						component: TestComponent
					}, {
						path: '/cards',
						name: 'Cards',
						component: TestComponent
					}]
				}]
			}];
			const routerElemets = createAdminRoutes(RouterList);
			const routeEl = routerElemets[ 0 ];
			
			expect(routerElemets).toHaveLength(2);
			expect(routeEl.key).toEqual('Buttons');
			expect(routeEl.props.path).toEqual('/test/buttons');
		});
	});
});
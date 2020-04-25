import React from "react";
import { Switch, Route } from 'react-router-dom';
import RouteConfig from '../../route';
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import LoggedInFooter from "../../components/LoggedInFooter/LoggedInFooter";

export function createAdminRoutes(routerConfigList) {
	const routeElements = [];
	routerConfigList.forEach(config => {
		const routes = config.routes;
		routes.forEach(route => {
			if (route.subRoutes) {
				route.subRoutes.forEach(subRoute => {
					routeElements.push(
						<Route
							key={subRoute.name}
							path={route.path + subRoute.path}
							component={subRoute.component}
						/>
					);
				});
			} else {
				routeElements.push(
					<Route key={route.name} path={route.path} component={route.component} />
				);
			}
		});
	});
	return routeElements;
}

const Admin = props => {
	const adminRoutes = createAdminRoutes(RouteConfig);
	return (
		<div id="page-top">
			<div id="wrapper">
				<SideBar />
				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						<NavBar />
						<div className="container-fluid">
							<Switch>
								{adminRoutes}
							</Switch>
						</div>
					</div>
					<LoggedInFooter />
				</div>
			</div>
		</div>
	);
};

export default Admin;
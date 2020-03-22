import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import React, { Component, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";

// Lazy component
const Admin = React.lazy(() => import('./layout/Admin/Admin'));
const Authentication = React.lazy(() => import('./layout/Authentication/Authentication'));

const browserHistory = createBrowserHistory();

export default class App extends Component {
	
	static defaultProps = {
		accessToken: ""
	};
	static propTypes = {
		accessToken: PropTypes.string.isRequired
	};

	onAuthFail = location => ({
		pathname: "/sign-in",
		state: { from: location }
	});
	renderAuthRoutes = () => {
		return !this.props.accessToken ? <Authentication /> : <Redirect to="/" />;
	};
	renderAdminRoute = renderProps => {
		return this.props.accessToken ? (
			<Admin />
		) : (
			<Redirect to={this.onAuthFail(renderProps.location)} />
		);
	};
	render() {
		return (
			<Router history={browserHistory}>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route path="/sign-in" render={this.renderAuthRoutes} />
						<Route path="/sign-up" render={this.renderAuthRoutes} />
						<Route path="/forgot-password" render={this.renderAuthRoutes} />
						<Route path="/" render={this.renderAdminRoute} />
					</Switch>
				</Suspense>
			</Router>
		);
	}
}

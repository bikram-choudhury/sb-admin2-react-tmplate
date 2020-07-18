import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
import React, { Component, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import { auth } from './firebase';
import { AuthContext } from './contexts/AuthContext';
import { setAuthInfo } from './actions/auth/auth.action';

// Lazy component
const Admin = React.lazy(() => import('./layout/Admin/Admin'));
const Authentication = React.lazy(() => import('./layout/Authentication/Authentication'));

const browserHistory = createBrowserHistory();

export default class App extends Component {

	static defaultProps = {
		isAuthenticated: false
	};
	static propTypes = {
		isAuthenticated: PropTypes.bool.isRequired
	};
	static contextType = AuthContext;
	unsubscribe = null;

	componentDidMount() {
		const { authDispatch: dispatch } = this.context;
		this.unsubscribe = auth.onAuthStateChanged(authUser => {
			if (authUser) {
				// user is logged in
				dispatch(setAuthInfo({ user: authUser }));
			} else {
				// user is logged out
				dispatch(setAuthInfo({ user: null }));
			}
		})
	}
	componentWillUnmount() {
		if (this.unsubscribe) {
			this.unsubscribe();
		}
	}

	onAuthFail = location => ({
		pathname: "/sign-in",
		state: { from: location }
	});
	renderAuthRoutes = () => {
		return !this.props.isAuthenticated ? <Authentication /> : <Redirect to="/" />;
	};
	renderAdminRoute = renderProps => {
		return this.props.isAuthenticated ? (
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

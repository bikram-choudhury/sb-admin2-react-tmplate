import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Admin } from './layout/Admin/Admin';
import { Authentication } from './layout/Authentication/Authentication';

const browserHistory = createBrowserHistory();

export default class App extends Component {

    constructor(props) {
        super(props);
    }
    static defaultProps = {
        accessToken: ""
    }
    static propTypes = {
        accessToken: PropTypes.string.isRequired
    }

    onAuthFail = (location) => ({ pathname: '/sign-in', state: { from: location } });
    renderAuthRoutes = () => {
        return !this.props.accessToken ? <Authentication /> : <Redirect to="/" />
    }
    renderAdminRoute = renderProps => {
        return this.props.accessToken ? <Admin /> : <Redirect to={this.onAuthFail(renderProps.location)} />
    }
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Route path="/sign-in" render={this.renderAuthRoutes} />
                    <Route path="/sign-up" render={this.renderAuthRoutes} />
                    <Route path="/" render={this.renderAdminRoute} />
                </Switch>
            </Router>
        );
    }
}


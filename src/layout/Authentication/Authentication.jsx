import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

export const Authentication = props => {
	return (
		<div id="wrapper" className="bg-gradient-primary">
			<Switch>
				<Route path="/sign-in" component={SignIn} />
				<Route path="/sign-up" component={SignUp} />
			</Switch>
		</div>
	);
};

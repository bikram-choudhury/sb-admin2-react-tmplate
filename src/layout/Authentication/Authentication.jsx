import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const SignIn = React.lazy(() => import("../../components/SignIn/SignIn"));
const SignUp = React.lazy(() => import("../../components/SignUp/SignUp"));

const Authentication = props => {
	return (
		<div id="wrapper" className="bg-gradient-primary">
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
				</Switch>
			</Suspense>
		</div>
	);
};

export default Authentication;
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { AuthContextProvider, AuthContext } from "./contexts/AuthContext";

import './assets/fontawesome-free/css/all.css';
import './assets/datatables/dataTables.bootstrap4.css';
import './assets/css/sb-admin-2.css';

ReactDOM.render(
	<AuthContextProvider>
		<AuthContext.Consumer>
			{context => <App isAuthenticated={!!context.user} />}
		</AuthContext.Consumer>
	</AuthContextProvider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

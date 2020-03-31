import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import LoggedInFooter from "../../components/LoggedInFooter/LoggedInFooter";

const Admin = props => {
	return (
		<div id="page-top">
			<div id="wrapper">
				<SideBar />
				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						<NavBar />
						<div className="container-fluid">
							{/* <!-- Main Content --> */}
						</div>
					</div>
					<LoggedInFooter />
				</div>
			</div>
		</div>
	);
};

export default Admin;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RouteConfig from '../../route';
import SideBarMenu from '../SideBarMenu/SideBarMenu';

const SideBar = () => {

    const [ toggled, setToggled ] = React.useState(false);
    
    let sideBarClassName = 'navbar-nav bg-gradient-primary sidebar';
    sideBarClassName += ` sidebar-dark accordion ${toggled ? 'toggled' : ''}`;

    const { pathname } = useLocation();
    const parentRoutePath = pathname.split('/')[ 1 ];

    const [ baseRoute, setBaseRoute ] = useState('/' + parentRoutePath);

    return (
        <ul
            className={sideBarClassName}
            id="accordionSidebar"
        >
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to={"/"}
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
            <hr className="sidebar-divider my-0" />
            {
                RouteConfig.map(
                    config => <SideBarMenu
                        key={config.heading}
                        {...config}
                        baseRoute={baseRoute}
                        setBaseRoute={setBaseRoute}
                    />
                )
            }

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            <div className="text-center d-none d-md-inline">
                <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                    onClick={() => {
                        setToggled(!toggled);
                        setBaseRoute('');
                    }}
                ></button>
            </div>

        </ul>

    );
}

export default SideBar;
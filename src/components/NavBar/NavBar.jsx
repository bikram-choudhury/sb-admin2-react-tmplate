import React, { useState } from 'react';
import { useAuthContext } from './../../contexts/AuthContext';
import { auth } from './../../firebase';

const NavBar = () => {
    const [ toggleDropdown, updateToggleDropdown ] = useState(false);
    const [ toggleMsgs, updateToggleMsgs ] = useState(false);
    const [ toggleAlerts, updateToggleAlerts ] = useState(false);

    const { email } = auth.currentUser || {};
    const { user } = useAuthContext();
    const logout = () => {
        if (user) {
            auth.signOut();
        }
    }
    const resetAllDropdownState = () => {
        updateToggleDropdown(false);
        updateToggleMsgs(false);
        updateToggleAlerts(false);
    }
    const userDropdownClass = `dropdown-menu dropdown-menu-right shadow animated--grow-in`;
    return (
        <nav
            className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
        >
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <i className="fa fa-bars"></i>
            </button>
            <form
                className={
                    `d-none d-sm-inline-block form-inline 
                    mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search`
                }
            >
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>

            <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                        className="nav-link dropdown-toggle"
                        href="xyz.html"
                        id="searchDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div
                        className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown"
                    >
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control bg-light border-0 small"
                                    placeholder="Search for..."
                                    aria-label="Search"
                                    aria-describedby="basic-addon2"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                <li className={`nav-item dropdown no-arrow mx-1 ${toggleAlerts ? 'show' : ''}`}>
                    <span
                        className="nav-link dropdown-toggle"
                        id="alertsDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={toggleAlerts ? true : false}
                        onClick={() => {
                            resetAllDropdownState();
                            updateToggleAlerts(!toggleAlerts);
                        }}
                    >
                        <i className="fas fa-bell fa-fw"></i>
                        {/* <!-- Counter - Alerts --> */}
                        <span className="badge badge-danger badge-counter">3+</span>
                    </span>
                    {/* <!-- Dropdown - Alerts --> */}
                    <div className={`dropdown-list dropdown-menu dropdown-menu-right` +
                        `shadow animated--grow-in ${toggleAlerts ? 'show' : ''}`}
                        aria-labelledby="alertsDropdown"
                    >
                        <h6 className="dropdown-header"> Alerts Center</h6>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="mr-3">
                                <div className="icon-circle bg-primary">
                                    <i className="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 12, 2019</div>
                                <span className="font-weight-bold">
                                    A new monthly report is ready to download!
                                </span>
                            </div>
                        </span>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="mr-3">
                                <div className="icon-circle bg-success">
                                    <i className="fas fa-donate text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 7, 2019</div>
                                {`$290.29 has been deposited into your account!`}
                            </div>
                        </span>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="mr-3">
                                <div className="icon-circle bg-warning">
                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                </div>
                            </div>
                            <div>
                                <div className="small text-gray-500">December 2, 2019</div>
                                {`Spending Alert: We've noticed unusually`}
                                {`high spending for your account.`}
                            </div>
                        </span>
                        <span className="dropdown-item text-center small text-gray-500">
                            Show All Alerts
                        </span>
                    </div>
                </li>

                <li className={`nav-item dropdown no-arrow mx-1 ${toggleMsgs ? 'show' : ''}`}>
                    <span
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={toggleMsgs ? true : false}
                        onClick={() => {
                            resetAllDropdownState();
                            updateToggleMsgs(!toggleMsgs);
                        }}
                    >
                        <i className="fas fa-envelope fa-fw"></i>
                        {/* <!-- Counter - Messages --> */}
                        <span className="badge badge-danger badge-counter">7</span>
                    </span>
                    {/* <!-- Dropdown - Messages --> */}
                    <div className={`dropdown-list dropdown-menu dropdown-menu-right ` +
                        `shadow animated--grow-in ${toggleMsgs ? 'show' : ''}`}
                        aria-labelledby="messagesDropdown"
                    >
                        <h6 className="dropdown-header">Message Center</h6>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                                    alt=""
                                />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div className="font-weight-bold">
                                <div className="text-truncate">
                                    {
                                        `Hi there! I am wondering if you can help 
														me with a problem I've been having.`
                                    }
                                </div>
                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                            </div>
                        </span>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                                    alt=""
                                />
                                <div className="status-indicator"></div>
                            </div>
                            <div>
                                <div className="text-truncate">
                                    {
                                        `I have the photos that you ordered last month, 
														how would you like them sent to you?`
                                    }
                                </div>
                                <div className="small text-gray-500">Jae Chun · 1d</div>
                            </div>
                        </span>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                                    alt=""
                                />
                                <div className="status-indicator bg-warning"></div>
                            </div>
                            <div>
                                <div className="text-truncate">
                                    {
                                        "Last month's report looks great, " +
                                        "I am very happy with the progress so far, " +
                                        "keep up the good work!"
                                    }
                                </div>
                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                            </div>
                        </span>
                        <span className="dropdown-item d-flex align-items-center">
                            <div className="dropdown-list-image mr-3">
                                <img
                                    className="rounded-circle"
                                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                    alt=""
                                />
                                <div className="status-indicator bg-success"></div>
                            </div>
                            <div>
                                <div className="text-truncate">
                                    {
                                        "Am I a good boy? The reason I ask is " +
                                        "because someone told me that people say this " +
                                        "to all dogs, even if they aren't good..."
                                    }
                                </div>
                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                            </div>
                        </span>
                        <span className="dropdown-item text-center small text-gray-500">
                            Read More Messages
                        </span>
                    </div>
                </li>

                <div className="topbar-divider d-none d-sm-block"></div>

                <li className={`nav-item dropdown no-arrow ${toggleDropdown ? 'show' : ''}`}>
                    <span
                        className="nav-link dropdown-toggle"
                        id="userDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded={toggleDropdown ? true : false}
                        onClick={() => {
                            resetAllDropdownState();
                            updateToggleDropdown(!toggleDropdown)
                        }}
                    >
                        <span className={
                            "mr-2 d-none d-lg-inline text-gray-600 small username-ellipsis"
                        } title={email}>{email}</span>
                        <img
                            className="img-profile rounded-circle"
                            src="https://source.unsplash.com/QAB-WJcbgJk/60x60"
                            alt="user profile"
                        />
                    </span>

                    <div
                        className={`${userDropdownClass} ${toggleDropdown ? 'show' : ''}`}
                        aria-labelledby="userDropdown"
                    >
                        <span className="dropdown-item">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            profile
                        </span>
                        <span className="dropdown-item">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Settings
                        </span>
                        <span className="dropdown-item">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </span>
                        <div className="dropdown-divider"></div>
                        <span className="dropdown-item" onClick={logout}>
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Logout
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
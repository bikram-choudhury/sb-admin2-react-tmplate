import React, { Fragment } from 'react';
import { DropdownData } from './_dropdown';
import Dropdown from '../Dropdown/Dropdown';

const UtilitiesAnimation = () => {
    const getSelectedItem = (item) => {
        console.log(item);
    }
    return (
        <Fragment>
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
            <p className="mb-4">
                Bootstrap&rsquo;s default utility classes can be found on the official
              <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page.
              The custom utilities below were created to extend this theme past the
              default utility classes built into Bootstrap&rsquo;s framework.
            </p>

            {/* <!-- Content Row --> */}
            <div className="row">

                {/* <!-- Grow In Utility --> */}
                <div className="col-lg-6">

                    <div className="card position-relative">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Grow In Animation Utilty
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <code>.animated--grow-in</code>
                            </div>
                            <div className="small mb-1">Navbar Dropdown Example:</div>
                            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                                <span className="navbar-brand" >Navbar</span>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Dropdown
                                            items={DropdownData}
                                            type="link"
                                            className="nav-link"
                                            name="Dropdown"
                                            animatedClassName={
                                                "dropdown-menu-right animated--grow-in"
                                            }
                                            selected={getSelectedItem}
                                        />
                                    </li>
                                </ul>
                            </nav>
                            <p className="mb-0 small">
                                Note: This utility animates the CSS transform property,
                                meaning it will override any existing transforms on an element
                                being animated! In this theme, the grow in animation is only
                                being used on dropdowns within the navbar.
                            </p>
                        </div>
                    </div>

                </div>

                {/* <!-- Fade In Utility --> */}
                <div className="col-lg-6">

                    <div className="card position-relative">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Fade In Animation Utilty
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="mb-3">
                                <code>.animated--fade-in</code>
                            </div>
                            <div className="small mb-1">Navbar Dropdown Example:</div>
                            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                                <span className="navbar-brand">Navbar</span>
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Dropdown
                                            items={DropdownData}
                                            type="link"
                                            className="nav-link"
                                            name="Dropdown"
                                            animatedClassName={
                                                "dropdown-menu-right animated--fade-in"
                                            }
                                            selected={getSelectedItem}
                                        />
                                    </li>
                                </ul>
                            </nav>
                            <div className="small mb-1">Dropdown Button Example:</div>
                            <div className="mb-4">
                                <Dropdown
                                    items={DropdownData}
                                    type="button"
                                    className="btn btn-primary"
                                    name="Dropdown"
                                    animatedClassName="animated--fade-in"
                                    selected={getSelectedItem}
                                />
                            </div>
                            <p className="mb-0 small">
                                Note: This utility animates the CSS opacity property,
                                meaning it will override any existing opacity on an
                                element being animated!
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </Fragment>
    );
}

export default UtilitiesAnimation;
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const ListItem = props => {
    const {
        name,
        subRoutes,
        path: parentRoutePath,
        icon,
        heading,
        baseRoute,
        setBaseRoute
    } = props;

    return (
        <li className={
            `nav-item ${baseRoute === parentRoutePath ? 'active' : ''}`
        } >
            {
                subRoutes ? (
                    <Fragment>
                        <span
                            className={
                                `nav-link ${baseRoute === parentRoutePath ? '' : 'collapsed'}`
                            }
                            key={name}
                            data-toggle="collapse"
                            aria-expanded="true"
                            onClick={() => {
                                if (baseRoute) {
                                    if (baseRoute === parentRoutePath) {
                                        setBaseRoute('');
                                    } else {
                                        setBaseRoute(parentRoutePath);
                                    }
                                } else {
                                    setBaseRoute(parentRoutePath);
                                }
                            }}
                        >
                            <i className={
                                `fas fa-fw ${icon}`
                            }></i>
                            <span>{name}</span>
                        </span>
                        <div className={
                            `collapse ${baseRoute === parentRoutePath ? 'show' : ''}`
                        }>
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">{heading}:</h6>
                                {
                                    subRoutes.map(subRoute => {
                                        return (
                                            <Fragment key={subRoute.name}>
                                                <NavLink
                                                    to={parentRoutePath + subRoute.path}
                                                    className="collapse-item"
                                                >
                                                    {subRoute.name}
                                                </NavLink>
                                                {
                                                    subRoute.divider ? (
                                                        <div className="collapse-divider"></div>
                                                    ) : null
                                                }
                                                {
                                                    subRoute.heading ? (
                                                        <h6 className="collapse-header">
                                                            {subRoute.heading}:
                                                        </h6>
                                                    ) : null
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Fragment>
                ) : (
                        <NavLink className="nav-link" to={parentRoutePath}>
                            <i className={`fas fa-fw ${icon}`}></i>
                            <span>{name}</span>
                        </NavLink>
                    )
            }
        </li>

    );
}

ListItem.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string,
    icon: PropTypes.string,
    subRoutes: PropTypes.arrayOf(
        PropTypes.shape({
            path: PropTypes.string,
            icon: PropTypes.string,
            name: PropTypes.string
        })
    ),
    heading: PropTypes.string,
    baseRoute: PropTypes.string,
    setBaseRoute: PropTypes.func
}

export default ListItem;
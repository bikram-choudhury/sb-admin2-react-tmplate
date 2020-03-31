import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

const SideBarMenu = props => {
    const { heading, routes, divider, baseRoute, setBaseRoute } = props;
    return (
        <Fragment key={heading}>
            {
                heading ? (
                    <div className="sidebar-heading"> {heading} </div>
                ) : null
            }
            {
                routes.map(
                    route => <ListItem
                        key={route.name} {...route}
                        baseRoute={baseRoute}
                        setBaseRoute={setBaseRoute}
                    />
                )
            }
            {
                divider ? (
                    <hr className="sidebar-divider" />
                ) : null
            }
        </Fragment>
    );
}

SideBarMenu.propTypes = {
    heading: PropTypes.string,
    routes: PropTypes.array.isRequired,
    divider: PropTypes.bool,
    baseRoute: PropTypes.string,
    setBaseRoute: PropTypes.func
}

export default SideBarMenu;
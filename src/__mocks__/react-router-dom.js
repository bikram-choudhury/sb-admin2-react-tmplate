import React from "react";
import PropTypes from 'prop-types';
const rrd = require("react-router-dom");

// just render plain div with its children
const RoutingComponent = ({ children }) => <div>{children}</div>
RoutingComponent.propTypes = {
    children: PropTypes.node.isRequired
}

rrd.BrowserRouter = RoutingComponent;

module.exports = rrd;

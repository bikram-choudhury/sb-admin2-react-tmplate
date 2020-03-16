import React from 'react';
const rrd = require('react-router-dom');

// just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>

module.exports = rrd;
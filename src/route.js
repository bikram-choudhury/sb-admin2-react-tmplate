import React from 'react';

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const Buttons = React.lazy(() => import("./components/Buttons/Buttons"));
const Cards = React.lazy(() => import("./components/Cards/Cards"));
const UtilitiesColor = React.lazy(() => import("./components/UtilitiesColor/UtilitiesColor"));
const UtilitiesBorder = React.lazy(() => import("./components/UtilitiesBorder/UtilitiesBorder"));
const UtilitiesAnimation = React.lazy(
    () => import("./components/UtilitiesAnimation/UtilitiesAnimation")
);
const UtilitiesOthers = React.lazy(() => import("./components/UtilitiesOthers/UtilitiesOthers"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));
const BlankDocument = React.lazy(() => import("./components/BlankDocument/BlankDocument"));

const RouteConfig = [{
    heading: '',
    divider: true,
    routes: [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        icon: 'fa-tachometer-alt'
    }]
}, {
    heading: 'Interface',
    divider: true,
    routes: [{
        path: '/components',
        name: 'Components',
        icon: 'fa-cog',
        heading: 'Custom Components',
        subRoutes: [{
            path: '/buttons',
            name: 'Buttons',
            component: Buttons
        }, {
            path: '/cards',
            name: 'Cards',
            component: Cards
        }]
    }, {
        path: '/utilities',
        name: 'Utilities',
        icon: 'fa-wrench',
        heading: 'Custom Utilities',
        subRoutes: [{
            path: '/colors',
            name: 'Colors',
            component: UtilitiesColor
        }, {
            path: '/borders',
            name: 'Borders',
            component: UtilitiesBorder
        }, {
            path: '/animations',
            name: 'Animations',
            component: UtilitiesAnimation
        }, {
            path: '/other',
            name: 'Other',
            component: UtilitiesOthers
        }]
    }]
}, {
    heading: 'Addons',
    divider: false,
    routes: [{
        path: '/pages',
        name: 'Pages',
        icon: 'fa-folder',
        heading: 'Login Screens',
        subRoutes: [{
            path: '/login',
            name: 'Login',
            component: Dashboard
        }, {
            path: '/register',
            name: 'Register',
            component: Dashboard
        }, {
            path: '/forgot-password',
            name: 'Forgot Password',
            component: Dashboard,
            divider: true,
            heading: 'Other Pages'
        }, {
            path: '/404',
            name: '404 Page',
            component: NotFound
        }, {
            path: '/blank',
            name: 'Blank Page',
            component: BlankDocument
        }]
    }, {
        path: '/charts',
        name: 'Charts',
        component: Dashboard,
        icon: 'fa-chart-area'
    }, {
        path: '/tables',
        name: 'Tables',
        component: Dashboard,
        icon: 'fa-table'
    }]
}]

export default RouteConfig;
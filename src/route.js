import React from 'react';

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));

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
            component: Dashboard
        }, {
            path: '/cards',
            name: 'Cards',
            component: Dashboard
        }]
    }, {
        path: '/utilities',
        name: 'Utilities',
        icon: 'fa-wrench',
        heading: 'Custom Utilities',
        subRoutes: [{
            path: '/colors',
            name: 'Colors',
            component: Dashboard
        }, {
            path: '/borders',
            name: 'Borders',
            component: Dashboard
        }, {
            path: '/animations',
            name: 'Animations',
            component: Dashboard
        }, {
            path: '/other',
            name: 'Other',
            component: Dashboard
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
            component: Dashboard
        }, {
            path: '/blank',
            name: 'Blank Page',
            component: Dashboard
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
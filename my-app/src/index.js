import React from 'react';
import ReactDOM from 'react-dom';
import HomeDocument from './HomeDocument';
import IndexDocument from './Pages/IndexDocument';
import PortfolioDocument from './Pages/PortfolioDocument';
import BlogDocument from './Pages/BlogDocument';
import ContactDocument from './Pages/ContactDocument';
import AboutDocument from './Pages/AboutDocument';
import Index from './Pages/Project/Index';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routeMap from '../routeMap.json';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path={routeMap.home} component={HomeDocument}>
            <IndexRoute component={IndexDocument} />
            <Route path={routeMap.portfolio} component={PortfolioDocument} />
            <Route path={routeMap.about} component={AboutDocument} />
            <Route path={routeMap.blog} component={BlogDocument} />
            <Route path={routeMap.contact} component={ContactDocument} />
            <Route path={routeMap.project_details} component={Index} />
            /* <Route path={routeMap.index} component={IndexDocument} /> */
            {/* Phase 1 */}
        </Route>
    </Router>
    ),document.getElementById('root')
);

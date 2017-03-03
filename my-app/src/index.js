import React from 'react';
import ReactDOM from 'react-dom';
import HomeDocument from './HomeDocument';
import IndexDocument from './Pages/IndexDocument';
import PortfolioDocument from './Pages/PortfolioDocument';
import BlogDocument from './Pages/BlogDocument';
import ContactDocument from './Pages/ContactDocument';
import AboutDocument from './Pages/AboutDocument';
import ProjectDetails from './Pages/Project/ProjectDetails';
import FunnyBox from './Pages/FunnyBoxDocument';
import NotFound from './Pages/NotFoundDocument';
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
            <Route path={routeMap.project_details} component={ProjectDetails} />
            <Route path={routeMap.funny_box} component={FunnyBox} />
            /* <Route path={routeMap.index} component={IndexDocument} /> */
        </Route>
      <Route path="*" component={NotFound} />
    </Router>
    ),document.getElementById('root')
);

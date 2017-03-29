import React from 'react';
import ReactDOM from 'react-dom';
import HomeDocument from './HomeDocument';
import IndexDocument from './pages/IndexDocument';
import PortfolioDocument from './pages/Portfolio/Index';
import BlogDocument from './pages/BlogDocument';
import ContactDocument from './pages/Contact/Index';
import AboutDocument from './pages/About/Index';
import ProjectDetails from './pages/Portfolio/Details';
import FunnyBox from './pages/FunnyBox/Index';
import NotFound from './pages/NotFoundDocument';
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

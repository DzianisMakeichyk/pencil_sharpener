import React from 'react';
import ReactDOM from 'react-dom';
import HomeDocument from './HomeDocument';
import IndexDocument from './Pages/IndexDocument';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routeMap from '../routeMap.json';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path={routeMap.home} component={HomeDocument}>
            <IndexRoute component={IndexDocument} />
            /* <Route path={routeMap.index} component={IndexDocument} /> */
            {/* Phase 1 */}
        </Route>
    </Router>
    ),document.getElementById('root')
);


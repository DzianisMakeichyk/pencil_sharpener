import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routeMapPL from '../resources/lang/pl/routeMap.json';
import routeMapEN from '../resources/lang/en/routeMap.json';
import plMessages from '../resources/lang/pl/pl';
import enMessages from '../resources/lang/en/en';
import plReactIntlLocaleData from 'react-intl/locale-data/pl';
import { addLocaleData, IntlProvider } from 'react-intl';
import HomeDocument from './HomeDocument';
import IndexDocument from './pages/IndexDocument';
import PortfolioDocument from './pages/Portfolio/Index';
import BlogDocument from './pages/BlogDocument';
import ContactDocument from './pages/Contact/Index';
import AboutDocument from './pages/About/Index';
import ProjectDetails from './pages/Portfolio/Details';
import FunnyBox from './pages/FunnyBox/Index';
// import NotFound from './pages/NotFoundDocument';

addLocaleData(plReactIntlLocaleData);

ReactDOM.render((
  <div>
    <IntlProvider defaultLocale="pl" locale="pl" messages={plMessages}>
      <Router history={browserHistory}>
        <Route path={routeMapPL.home} component={HomeDocument}>
          <IndexRoute component={IndexDocument} />
          <Route path={routeMapPL.portfolio} component={PortfolioDocument} />
          <Route path={routeMapPL.about} component={AboutDocument} />
          <Route path={routeMapPL.blog} component={BlogDocument} />
          <Route path={routeMapPL.contact} component={ContactDocument} />
          <Route path={routeMapPL.project_details} component={ProjectDetails} />
          <Route path={routeMapPL.funny_box} component={FunnyBox} />
          /* <Route path={routeMapPL.index} component={IndexDocument} /> */
        </Route>
        {/*<Route path="*" component={NotFound} />*/}
      </Router>
    </IntlProvider>
    <IntlProvider defaultLocale="en" locale="en" messages={enMessages}>
      <Router history={browserHistory}>
        <Route path={routeMapEN.home} component={HomeDocument}>
          <IndexRoute component={IndexDocument} />
          <Route path={routeMapEN.portfolio} component={PortfolioDocument} />
          <Route path={routeMapEN.about} component={AboutDocument} />
          <Route path={routeMapEN.blog} component={BlogDocument} />
          <Route path={routeMapEN.contact} component={ContactDocument} />
          <Route path={routeMapEN.project_details} component={ProjectDetails} />
          <Route path={routeMapEN.funny_box} component={FunnyBox} />
          /* <Route path={routeMapEN.index} component={IndexDocument} /> */
        </Route>
        {/*<Route path="*" component={NotFound} />*/}
      </Router>
    </IntlProvider>
  </div>
    ),document.getElementById('root'),
);

import React from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import classnames from 'classnames';
import Social from './Pages/Elements/Social';

export default class Menu extends React.Component {

  static propTypes = {
    routeMap: React.PropTypes.object,
    location: React.PropTypes.object.isRequired,
  };

  static contextTypes = {
    router: React.PropTypes.object,
  };

  render() {
    return (
       <div className="show-menu">
         <ul className="list-menu">
           <li
             className={classnames('item-menu', {
               'is-active-page': this.props.location.pathname === this.props.routeMap.home,
             })}
           >
               <Link
                 to="/"
                 className="text-menu"
               >
                Home
              </Link>
           </li>
           <li
             className={classnames('item-menu', {
               'is-active-page': this.props.location.pathname === this.props.routeMap.portfolio || + '/' + this.context.router.params.slug,
             })}
           >
               <Link
                 to={routeMap.portfolio}
                 className="text-menu"
               >
                Portfolio
              </Link>
           </li>
           <li
             className={classnames('item-menu', {
               'is-active-page': this.props.location.pathname === this.props.routeMap.about,
             })}
           >
               <Link
                 to={routeMap.about}
                 className="text-menu"
               >
                O mnie
              </Link>
           </li>
           <li
             className={classnames('item-menu', {
               'is-active-page': this.props.location.pathname === this.props.routeMap.blog,
             })}
           >
               <Link
                 to={routeMap.blog}
                 className="text-menu"
               >
                Blog
              </Link>
           </li>
           <li
             className={classnames('item-menu', {
               'is-active-page': this.props.location.pathname === this.props.routeMap.blog,
             })}
           >
               <Link
                 to={routeMap.blog}
                 className="text-menu"
               >
                Funny Box
              </Link>
           </li>
           <li
             className={classnames('item-menu', {
               'is-active-page': this.props.location.pathname === this.props.routeMap.contact,
             })}
           >
               <Link
                 to={routeMap.contact}
                 className="text-menu"
               >
                Kontakt
              </Link>
           </li>
           <Social />
         </ul>
       </div>
    );
  }
}

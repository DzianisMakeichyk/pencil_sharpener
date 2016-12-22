import React from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';

// Image

import fb_icon from './img/social/facebook.svg';
import linkedin_icon from './img/social/linkedin.svg';
import vk_icon from './img/social/vk.svg';

export default class App extends React.Component {

  static propTypes = {
    routeMap: React.PropTypes.object,
    location: React.PropTypes.object.isRequired,
  };

  render() {
    console.log(this.routeMap);
    return (
       <div className="show-menu">
         <MediaQuery maxDeviceWidth={767}>
           <div className="lines">
             <div className="vertical-line"></div>
             <div className="vertical-line"></div>
             <div className="vertical-line"></div>
             <div className="horizontal-line"></div>
             <div className="horizontal-line"></div>
           </div>
         </MediaQuery>
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
             className="item-menu"
           >
               <Link
                 to={routeMap.portfolio}
                 className="text-menu"
               >
                Portfolio
              </Link>
           </li>
           <li
             className="item-menu"
           >
               <Link
                 to={routeMap.about}
                 className="text-menu"
               >
                O mnie
              </Link>
           </li>
           <li
             className="item-menu"
           >
               <Link
                 to={routeMap.blog}
                 className="text-menu"
               >
                Blog
              </Link>
           </li>
           <li
             className="item-menu"
           >
               <Link
                 to={routeMap.contact}
                 className="text-menu"
               >
                Kontakt
              </Link>
           </li>
           <div className="socials">
             <a
               href="https://www.facebook.com/dzianismakeichyk"
               target="_blank"
               data-toggle="tooltip"
               data-placement="top"
               title="facebook"
             >
               <img
                 className="icon-item"
                 src={fb_icon}
                 alt="facebook"
               />
             </a>
             <a
               href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127"
               target="_blank"
               data-toggle="tooltip"
               data-placement="top"
               title="linkedin"
             >
               <img
                 className="icon-item"
                 src={linkedin_icon}
                 alt="linkedin"
               />
             </a>
             <a
               href="https://www.vk.com/road66"
               target="_blank"
               data-toggle="tooltip"
               data-placement="top"
               title="vk"
             >
               <img
                 className="icon-item"
                 src={vk_icon}
                 alt="Dzianis Makeichyk"
               />
             </a>

           </div>
         </ul>
       </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';
import routeMap from '../routeMap.json';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';

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
               title="facebook"
             >
               <svg
                 className="icon-item"
                 xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="12px" height="12px" viewBox="0 0 512 512" xmlSpace="preserve" enableBackground="new 0 0 512 512">
                 <path d="M296.296 512H200.36V256h-64v-88.225l64-0.029 -0.104-51.976C200.256 43.794 219.773 0 304.556 0h70.588v88.242h-44.115c-33.016 0-34.604 12.328-34.604 35.342l-0.131 44.162h79.346l-9.354 88.225L296.36 256 296.296 512z"/>
               </svg>
             </a>
             <a
               href="https://pl.linkedin.com/in/dzianis-makeichyk-81664a127"
               target="_blank"
               title="linkedin"
             >
               <svg
                 className="icon-item"
                 version="1.1" viewBox="0 0 612 612" x="0px" y="0px" xmlSpace="preserve">
                 <path d="M133.572 172.485H17.639c-7.929 0-14.364 6.435-14.364 14.364v405.271c0 7.928 6.435 14.363 14.364 14.363h115.948c7.929 0 14.364-6.436 14.364-14.363V186.85C147.937 178.906 141.516 172.485 133.572 172.485zM119.208 577.756H31.989V201.214h87.219V577.756zM456.824 167.559c-56.294 0-93.123 24.29-114.512 45.419l-2.643-27.507c-0.719-7.383-6.924-12.985-14.293-12.985h-0.287l-105.691 2.025c-3.878 0.072-7.556 1.709-10.199 4.539 -2.657 2.83-4.051 6.607-3.878 10.472 1.322 29.59 1.279 64.179 1.221 104.226l-0.015 300.413c0 7.93 6.436 14.363 14.364 14.363H336.84c7.929 0 14.364-6.434 14.364-14.363V359.881c0-11.965 1.034-20.613 3.088-25.77 7.226-18.4 31.07-37.419 58.448-37.419 35.465 0 56.623 26.976 56.623 72.181V594.16c0 7.93 6.436 14.363 14.364 14.363h113.908c7.929 0 14.364-6.434 14.364-14.363V354.164C612 237.311 553.983 167.559 456.824 167.559zM583.271 579.797h-85.18V368.873c0-61.307-33.512-100.909-85.352-100.909 -41.139 0-74.593 28.671-85.15 55.575 -3.491 8.719-5.114 20.283-5.114 36.342v219.916h-87.219l0.015-286.006c0.043-34.015 0.086-64.122-0.704-90.839l77.782-1.494 4.468 46.325c0.718 7.369 6.909 12.985 14.307 12.985h2.441c4.956 0 9.553-2.542 12.182-6.751 8.475-13.545 41.526-57.729 111.092-57.729 80.368 0 126.448 57.542 126.448 157.877v225.633H583.271zM80.468 3.477C33.842 3.477 0 35.609 0 79.894c0 44.256 33.167 76.374 78.859 76.374 47.1 0 81.287-32.118 81.287-76.719C159.098 34.762 126.333 3.477 80.468 3.477zM78.859 127.54c-29.519 0-50.131-19.593-50.131-47.646 0-28.527 20.799-47.689 51.74-47.689 30.265 0 50.274 18.846 50.95 47.689C131.418 108.393 110.288 127.54 78.859 127.54z" />
               </svg>
             </a>
             <a
               href="https://www.vk.com/road66"
               target="_blank"
               title="vk"
             >
               <svg
                 className="icon-item"
                 version="1.1" viewBox="0 0 184.313 184.313" x="0px" y="0px" xmlSpace="preserve">
                 <path d="M180.323 147.777l-53.048-45.373 55.314-66.784c2.642-3.191 2.197-7.918-0.992-10.56 -3.19-2.643-7.918-2.199-10.561 0.992l-60.022 72.469c-0.304 0.366-0.562 0.754-0.784 1.156V30.836c0-4.142-3.357-7.5-7.5-7.5h-9.521c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h2.021v93.253L13.424 26.236c-2.541-3.272-7.253-3.864-10.524-1.324 -3.272 2.54-3.864 7.252-1.324 10.523l95.229 122.641c1.448 1.866 3.652 2.901 5.925 2.901 0.812 0 1.633-0.132 2.431-0.405 3.031-1.039 5.068-3.89 5.068-7.095v-46.55c0.423 0.767 0.981 1.476 1.686 2.079l58.658 50.171c1.413 1.209 3.146 1.8 4.871 1.8 2.116 0 4.22-0.891 5.703-2.625C183.84 155.204 183.471 150.469 180.323 147.777z" />
               </svg>
             </a>

           </div>
         </ul>
       </div>
    );
  }
}
